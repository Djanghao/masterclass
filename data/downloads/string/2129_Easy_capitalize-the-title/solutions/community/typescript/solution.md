# Easy method with step by step procedure. Beats 93.85%

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/5915815/](https://leetcode.com/problems/capitalize-the-title/solutions/5915815/)

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
```typescript []
function capitalizeTitle(title: string): string {

    //converting all string to lowercase
    const lowCase = title.toLowerCase();

    //spliting that into a array
    return lowCase.split(' ').map((word) => {

        //if word length is less than two then return it in loweCase
        if(word.length <=2){
            return word.toLowerCase()
        }else{
            //other wise just uppercasing first one char in that word
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        }
    })
      .join(' ');
   
    
};
```