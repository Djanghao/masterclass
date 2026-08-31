# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/5517955/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/5517955/)

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
```Java []
class StringIterator {
    private String compressedString;
    private int index;
    private int count;
    private char currentChar;

    public StringIterator(String compressedString) {
        this.compressedString = compressedString;
        this.index = 0;
        this.count = 0;
        this.currentChar = ' ';
        // Initialize the first character and its count
        if (compressedString.length() > 0) {
            currentChar = compressedString.charAt(index++);
            count = 0;
            while (index < compressedString.length() && Character.isDigit(compressedString.charAt(index))) {
                count = count * 10 + (compressedString.charAt(index++) - '0');
            }
        }
    }
    
    public char next() {
        if (count == 0) {
            if (index >= compressedString.length()) {
                return ' ';
            }
            currentChar = compressedString.charAt(index++);
            count = 0;
            while (index < compressedString.length() && Character.isDigit(compressedString.charAt(index))) {
                count = count * 10 + (compressedString.charAt(index++) - '0');
            }
        }
        count--;
        return currentChar;
    }
    
    public boolean hasNext() {
        return count > 0 || index < compressedString.length();
    }
}
```
```Javascript []
/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    this.compressedString = compressedString;
    this.index = 0;
    this.count = 0;
    this.currentChar = ' ';
    
    // Initialize the first character and its count
    if (this.compressedString.length > 0) {
        this.currentChar = this.compressedString.charAt(this.index++);
        while (this.index < this.compressedString.length && !isNaN(this.compressedString.charAt(this.index))) {
            this.count = this.count * 10 + parseInt(this.compressedString.charAt(this.index++));
        }
    }
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    if (this.count === 0) {
        if (this.index >= this.compressedString.length) {
            return ' ';
        }
        this.currentChar = this.compressedString.charAt(this.index++);
        this.count = 0;
        while (this.index < this.compressedString.length && !isNaN(this.compressedString.charAt(this.index))) {
            this.count = this.count * 10 + parseInt(this.compressedString.charAt(this.index++));
        }
    }
    this.count--;
    return this.currentChar;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    return this.count > 0 || this.index < this.compressedString.length;
};
```
```Typescript []
class StringIterator {
    private compressedString: string;
    private index: number;
    private count: number;
    private currentChar: string;

    constructor(compressedString: string) {
        this.compressedString = compressedString;
        this.index = 0;
        this.count = 0;
        this.currentChar = ' ';

        // Initialize the first character and its count
        if (this.compressedString.length > 0) {
            this.currentChar = this.compressedString.charAt(this.index++);
            while (this.index < this.compressedString.length && !isNaN(parseInt(this.compressedString.charAt(this.index)))) {
                this.count = this.count * 10 + parseInt(this.compressedString.charAt(this.index++));
            }
        }
    }

    next(): string {
        if (this.count === 0) {
            if (this.index >= this.compressedString.length) {
                return ' ';
            }
            this.currentChar = this.compressedString.charAt(this.index++);
            this.count = 0;
            while (this.index < this.compressedString.length && !isNaN(parseInt(this.compressedString.charAt(this.index)))) {
                this.count = this.count * 10 + parseInt(this.compressedString.charAt(this.index++));
            }
        }
        this.count--;
        return this.currentChar;
    }

    hasNext(): boolean {
        return this.count > 0 || this.index < this.compressedString.length;
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```