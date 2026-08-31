# Typescript Solution that beats 100% of solutions in runtime

**Author:** swastikbagga
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/5618965/](https://leetcode.com/problems/rle-iterator/solutions/5618965/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class RLEIterator {

    pointer: number;
    encoding: number[];

    constructor(encoding: number[]) {
        this.pointer = 0;
        this.encoding = encoding;
    }

    next(n: number): number {

        if (this.pointer == -1) return -1;
        else {
            if (this.encoding[this.pointer] < n) {
                let temp = this.pointer;
                let temp1 = n;
                while ( temp < this.encoding.length && temp1 - this.encoding[temp]> 0){
                    temp1 = temp1 - this.encoding[temp];
                    temp = temp + 2;
                }

                //console.log(temp);
                //console.log(temp1);

                if (temp >= this.encoding.length) {
                    this.pointer = -1;
                    return -1;
                }

                this.pointer = temp;
                this.encoding[temp] -= temp1; 
                //console.log(this.encoding);
                //console.log(this.pointer);
                return this.encoding[temp+1];
            } else {
                this.encoding[this.pointer] -= n;
                //console.log(this.encoding);
                //console.log(this.pointer);
                return this.encoding[this.pointer+1];
            }

            

        }

        
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
```