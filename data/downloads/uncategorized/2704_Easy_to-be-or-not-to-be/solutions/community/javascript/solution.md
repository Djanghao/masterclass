# 🍞🍞🍞 Full thorough explanation || ✅ simple, beginner friendly

**Author:** TheGElCOgecko
**Votes:** 462
**Link:** [https://leetcode.com/problems/to-be-or-not-to-be/solutions/3567095/](https://leetcode.com/problems/to-be-or-not-to-be/solutions/3567095/)

---

# Approach
The problem requires the ```expect``` function to support making ```toBe``` and ```notToBe``` calls (e.g., ```expect(5).toBe(5);``` should return ```true```, and ```expect(5).notToBe(5);``` should throw ```"Equal"```). To do so, we should define the return of the ```expect``` function based on what kind of call we make. This can be done in the following format:
```
return {
    toBe: (parameters) => {
        [doing some stuff]
    },
    notToBe: (parameters) => {
        [doing some stuff]
    }
}
```
The below solution follows this format, where ```toBe``` and ```notToBe``` both has an if else statement, such that if the throw condition is true, throw an error. Otherwise, return true.

# Code
```
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

/* For example, when expect(5).toBe(4) is called,
   val is the expect parameter (so val equals 5),
   val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */
```
UPVOTE if this was helpful \uD83C\uDF5E\uD83C\uDF5E\uD83C\uDF5E