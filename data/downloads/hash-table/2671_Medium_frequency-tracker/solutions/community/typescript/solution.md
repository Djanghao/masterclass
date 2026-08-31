# TS solution beats 100%

**Author:** tal0012
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/5548196/](https://leetcode.com/problems/frequency-tracker/solutions/5548196/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FrequencyTracker {
    private countMap: Map<number,number>;
    private freqMap: Map<number,number>;

    constructor() {
        this.countMap = new Map<number,number>();
        this.freqMap = new Map<number,number>();
    }

    add(number: number): void {
        this.countMap.set(number, (this.countMap.get(number) || 0) + 1);
        const newCount = this.countMap.get(number);

        const currFreqCount = this.freqMap.get(newCount) || 0;
        this.freqMap.set(newCount, currFreqCount + 1);

        const prevFreqCount = this.freqMap.get(newCount-1);
        if(prevFreqCount){
            this.freqMap.set(newCount-1, prevFreqCount-1);
            if(prevFreqCount-1 === 0){
                this.freqMap.delete(newCount-1);
            }
        }
    }

    deleteOne(number: number): void {
        if(!this.countMap.has(number)) return;

        this.countMap.set(number, this.countMap.get(number) - 1);
        const newCount = this.countMap.get(number);
        if(newCount === 0) this.countMap.delete(number);

        const currFreqCount = this.freqMap.get(newCount);
        if(currFreqCount){
            this.freqMap.set(newCount, currFreqCount + 1);
        }else{
            this.freqMap.set(newCount, 1);
        }

        const prevFreqCount = this.freqMap.get(newCount+1);
        this.freqMap.set(newCount+1, prevFreqCount-1);
        if(prevFreqCount-1 === 0){
            this.freqMap.delete(newCount+1);
        }
    }

    hasFrequency(frequency: number): boolean {
        return this.freqMap.has(frequency);
    }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
```