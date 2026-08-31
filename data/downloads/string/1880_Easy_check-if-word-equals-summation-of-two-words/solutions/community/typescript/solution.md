# Simple typescript solution O(n)

**Author:** FahadAminShovon
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1251411/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1251411/)

---

the getSum first replaces the characters with their corresponding values, "abc" => "012", and returst their numeric value, 
then just comparing and returning true false, 

Time complexity O(n) where n is the length of string


```ts
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    function getSum(str: string):number{
        return +Array.from(str).reduce((a, c) => a + (c.charCodeAt(0) - 97).toString(),"");
    }
    return getSum(firstWord) + getSum(secondWord) === getSum(targetWord)
}; 
```


