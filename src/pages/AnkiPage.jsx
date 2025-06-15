import React, { useState, useEffect, useCallback } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

/**
 * Filename: AnkiPage.jsx
 * Route: /anki
 * CSV‑driven flash‑card practice with basic spaced‑repetition mechanics.
 *
 * Keyboard shortcuts:
 *   space → reveal answer
 *   1     → Again   (repeat)
 *   2     → Good    (re‑queue later)
 *   3     → Easy    (remove)
 *   4     → Skip    (next without reveal)
 */
export default function AnkiPage() {
  const [cards, setCards] = useState([]); // active deck [{front, back}]
  const [idx, setIdx] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const deckEmpty = cards.length === 0;

  /* ---------- CSV IMPORT ---------- */
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: ({ data }) => {
        const filtered = (data || []).filter(
          (row) => row.front?.trim() && row.back?.trim()
        );
        setCards(filtered);
        restartDeck();
      },
    });
  };

  /* ---------- DECK OPS ---------- */
  const restartDeck = () => {
    setIdx(0);
    setShowBack(false);
  };

  const nextCard = useCallback(() => {
    setIdx((i) => (cards.length ? (i + 1) % cards.length : 0));
    setShowBack(false);
  }, [cards.length]);

  const repeatCard = useCallback(() => {
    setShowBack(false);
  }, []);

  const goodCard = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const [current] = newCards.splice(idx, 1);
      if (newCards.length === 0) {
        newCards.push(current);
      } else {
        const randomPos = Math.floor(Math.random() * (newCards.length + 1 - idx)) + idx;
        newCards.splice(randomPos, 0, current);
      }
      return newCards;
    });
    setShowBack(false);
    setIdx((i) => (cards.length ? (i >= cards.length - 1 ? 0 : i) : 0));
  }, [idx, cards.length]);

  const easyCard = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards.splice(idx, 1);
      return newCards;
    });
    setShowBack(false);
    setIdx(0);
  }, [idx]);

  const skipCard = useCallback(() => {
    nextCard();
  }, [nextCard]);

  /* ---------- KEYBOARD SHORTCUTS ---------- */
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      switch (e.key) {
        case " ":
        case "Spacebar": // older browsers
          e.preventDefault(); // prevent page scroll
          if (!showBack) setShowBack(true);
          break;
        case "1":
          repeatCard();
          break;
        case "2":
          goodCard();
          break;
        case "3":
          easyCard();
          break;
        case "4":
          skipCard();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showBack, repeatCard, goodCard, easyCard, skipCard]);

  /* ---------- RENDER ---------- */
  if (deckEmpty) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-6">
        <h1 className="text-3xl font-semibold">Import your Anki CSV</h1>

        <label className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow">
          <span>Select CSV</span>
          <input
            type="file"
            accept=".csv"
            onChange={handleFile}
            className="hidden"
          />
        </label>

        <p className="text-gray-500 max-w-md">
          File must contain <code className="font-mono">front</code> and <code className="font-mono">back</code> columns. Each row becomes one card.
        </p>
        <Link to="/" className="text-indigo-500 hover:underline">
          ← Back to site
        </Link>
      </main>
    );
  }

  const card = cards[idx];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Restart button */}
      <button
        onClick={restartDeck}
        className="absolute top-4 right-4 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-3 py-1 shadow"
      >
        Restart
      </button>

      {/* progress */}
      <div className="mb-4 text-sm text-gray-500">
        Card {idx + 1} / {cards.length}
      </div>

      {/* flash-card */}
      <section
        onClick={() => setShowBack((prev) => !prev)}
        className="w-full max-w-lg aspect-video bg-white border rounded-xl shadow-lg flex items-center justify-center p-6 text-2xl sm:text-3xl font-semibold cursor-pointer select-none transition-shadow duration-300 hover:shadow-xl text-gray-900"
      >
        {showBack ? card.back : card.front}
      </section>

      {/* controls */}
      {showBack ? (
        <div className="mt-6 flex gap-3 flex-wrap justify-center">
          <button onClick={repeatCard} className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow">
            Again (1)
          </button>
          <button onClick={goodCard} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow">
            Good (2)
          </button>
          <button onClick={easyCard} className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow">
            Easy (3)
          </button>
          <button onClick={skipCard} className="px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 shadow">
            Skip (4)
          </button>
        </div>
      ) : (
        <div className="mt-6 flex gap-3">
          <button onClick={() => setShowBack(true)} className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow">
            Show Answer (Space)
          </button>
          <button onClick={skipCard} className="px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 shadow">
            Skip (4)
          </button>
        </div>
      )}
    </main>
  );
}
