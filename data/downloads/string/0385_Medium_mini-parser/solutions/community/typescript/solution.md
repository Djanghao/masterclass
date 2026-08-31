# Beats 100%, simple and easy approach

**Author:** afhamfardeen98
**Votes:** 0
**Link:** [https://leetcode.com/problems/mini-parser/solutions/5985571/](https://leetcode.com/problems/mini-parser/solutions/5985571/)

---

# Intuition
**JSON Parsing**: JSON.parse(s) converts the string s into a native JavaScript object or array, which is helpful since we only need to recursively transform these into NestedInteger objects.

**Helper Function**: The helper function helper works as a recursive function to convert the parsed structure into a NestedInteger.

**Integer Check**: If t is a number, it directly returns a NestedInteger holding that integer.

**Recursive List Handling**: If t is an array, it initializes an empty NestedInteger list and iterates over the array, adding each element by calling helper recursively. This allows for deep nesting.

# Code
```typescript []
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

function deserialize(s: string): NestedInteger {
    return helper(JSON.parse(s))
};
function helper(t:any){
    if(typeof t ==='number') return new NestedInteger(t);

    const nestedInt = new NestedInteger();
    for(let i=0;i<t.length;i++){
        nestedInt.add(helper(t[i]));
    }
    return nestedInt;
}
```