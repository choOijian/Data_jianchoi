// Reusable Week selector. New records become links automatically.
// 02–15 is always shown; records outside that range are included as well.
export function weekNavigation(weeks, selectedWeek = null, { start = 2, end = 15 } = {}) {
  const records = new Map(weeks.map(record => [Number(record.week), record]));
  const numbers = [...new Set([
    ...Array.from({ length: Math.max(0, end - start + 1) }, (_, index) => start + index),
    ...records.keys()
  ])].filter(Number.isFinite).sort((a, b) => a - b);
  return `<nav class="week-navigation" aria-label="Week selection">${numbers.map(number => {
    const label = String(number).padStart(2, '0');
    const record = records.get(number);
    if (!record) return `<span class="week-unavailable" aria-disabled="true" aria-label="Week ${label}, 아직 기록 없음">${label}</span>`;
    const selected = selectedWeek !== null && Number(selectedWeek) === number;
    return `<a href="#week/${encodeURIComponent(record.week)}" aria-label="Week ${label}"${selected ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('')}</nav>`;
}
