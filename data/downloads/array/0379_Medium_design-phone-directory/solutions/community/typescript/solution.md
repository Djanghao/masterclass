# TypeScript Single Map Solution Beats 100% With Explanation

**Author:** VeryDeepLearning
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/835092/](https://leetcode.com/problems/design-phone-directory/solutions/835092/)

---

Since the "phone numbers" are just integers ranging from 0 to `capacity`, we can just perform for loop on capacity instead of initializing and maintaining a separate array of integers.

Time Complexity: O(N) get, O(1) release and check => total O(N)
Space Complexity: O(N) for the map
```ts
class PhoneDirectory {
  private capacity: number;
  private map: Record<number, boolean>;  

  constructor(maxNumbers: number) {
    this.capacity = maxNumbers; 
    this.map = {};
  }

  get(): number {    
    for (let num = 0; num < this.capacity; num++) {
      const lookup = this.map[num];
      
      if (lookup == null || lookup == false) {
        this.map[num] = true; 
        return num;
      }
    }
    
    return -1;
  }

  check(number: number): boolean {
    const lookup = this.map[number];
    return lookup == false || lookup == null;
  }

  release(number: number): void {
    this.map[number] = false;
  }
}
```