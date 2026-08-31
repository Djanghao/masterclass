# JavaScript

**Author:** ThakurBallary
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494865/](https://leetcode.com/problems/frequency-tracker/solutions/3494865/)

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

var FrequencyTracker = function() {
    this.freq = {};
    this.hasFreq = {};
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    this.freq[number] = ++this.freq[number] || 1;
    if (this.freq[number] > 1) {
        this.hasFreq[this.freq[number] - 1].delete(number);
    }
    if (!this.hasFreq[this.freq[number]]) {
        this.hasFreq[this.freq[number]] = new Set();
    }
    this.hasFreq[this.freq[number]].add(number);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if (this.freq[number]) {
        this.hasFreq[this.freq[number]].delete(number);
        this.freq[number]--;
        if (this.freq[number]) {
            this.hasFreq[this.freq[number]].add(number);
        }
    }
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return !!this.hasFreq[frequency]?.size;
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
```