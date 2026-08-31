# maximum-number-of-tasks-you-can-assign- TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/6036226/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/6036226/)

---


# Code
```typescript []
/**
 * Maximize the number of tasks assigned to workers given their strength and the option to use pills.
 *
 * @param {number[]} tasks - An array of tasks where each task has a specific strength requirement.
 * @param {number[]} workers - An array of workers where each worker has a specific strength.
 * @param {number} pills - The number of pills available to boost worker strength.
 * @param {number} strength - The amount by which a pill boosts a worker's strength.
 * @return {number} - The maximum number of tasks that can be assigned to workers.
 */
const maxTaskAssign = function(tasks: number[], workers: number[], pills: number, strength: number): number {
  // Sort tasks in ascending order and workers in descending order
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => b - a);

  const m = tasks.length, n = workers.length; // Get the number of tasks and workers
  const { min, floor } = Math; // Destructure some useful Math functions
  let l = 0, r = min(n, m); // Initialize left and right pointers for binary search

  while (l < r) {
    const mid = r - floor((r - l) / 2); // Calculate the middle index
    if (check(mid)) l = mid; // If we can assign mid tasks, move left
    else r = mid - 1; // Otherwise, adjust right boundary
  }

  return l; // Return the maximum number of tasks that can be assigned

  /**
   * Helper function to check if it's possible to assign k tasks.
   *
   * @param {number} k - The number of tasks to check for assignment.
   * @return {boolean} - True if tasks can be assigned, otherwise false.
   */
  function check(k: number): boolean {
    const wArr = workers.slice(0, k); // Get the strongest k workers
    const tArr = tasks.slice(0, k); // Get the k weakest tasks
    let tries = pills; // Initialize remaining pills
    const bs = Bisect(); // Create a new instance of the Bisect helper class
    wArr.reverse(); // Reverse workers to prioritize the strongest
    tArr.reverse(); // Reverse tasks to prioritize the weakest

    // Iterate over tasks to attempt assignment
    for (let elem of tArr) {
      const place = bs.bisect_left(wArr, elem); // Find a worker for the current task

      // If a worker can handle the task without a pill
      if (place < wArr.length) {
        wArr.pop(); // Assign the worker to the task
      } else if (tries > 0) { // If no worker can handle it and we have pills left
        const place2 = bs.bisect_left(wArr, elem - strength); // Check if a worker can handle it with a pill
        if (place2 < wArr.length) {
          wArr.splice(place2, 1); // Assign the worker who can do the task with a pill
          tries -= 1; // Use a pill
        }
      } else {
        return false; // No assignment possible
      }
    }

    return wArr.length === 0; // Return true if all tasks are assigned
  }
};

// Helper class for binary search operations
function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right };

  function insort_right(a: number[], x: number, lo: number = 0, hi: number | null = null): void {
    lo = bisect_right(a, x, lo, hi); // Get the position to insert
    a.splice(lo, 0, x); // Insert the element at the correct position
  }

  function bisect_right(a: number[], x: number, lo: number = 0, hi: number | null = null): number {
    // > upper_bound
    if (lo < 0) throw new Error('lo must be non-negative');
    if (hi == null) hi = a.length; // Set hi to the length of the array if not provided
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2); // Calculate mid index
      x < a[mid] ? (hi = mid) : (lo = mid + 1); // Adjust lo and hi based on comparison
    }
    return lo; // Return the position for the insertion
  }

  function insort_left(a: number[], x: number, lo: number = 0, hi: number | null = null): void {
    lo = bisect_left(a, x, lo, hi); // Get the position to insert
    a.splice(lo, 0, x); // Insert the element at the correct position
  }

  function bisect_left(a: number[], x: number, lo: number = 0, hi: number | null = null): number {
    // >= lower_bound
    if (lo < 0) throw new Error('lo must be non-negative');
    if (hi == null) hi = a.length; // Set hi to the length of the array if not provided
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2); // Calculate mid index
      a[mid] < x ? (lo = mid + 1) : (hi = mid); // Adjust lo and hi based on comparison
    }
    return lo; // Return the position for the insertion
  }
}
```