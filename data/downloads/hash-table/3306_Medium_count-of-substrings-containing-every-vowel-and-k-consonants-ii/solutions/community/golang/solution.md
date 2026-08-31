# Simple solution with intuition - O(n) time and O(n) space - Beat 100% runtime

**Author:** sumit_negi
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847044/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847044/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Requirement: all vowels and exactly 1 consonant

if substring from ith to (r-1)th index (i.e. word [ i : r ] ) matches the requirement. Then all substring from ith to (k-1)th index (i.e. word [ i : k ] ) also matches the requirement where k is the immediate next consonant index from (r-1)th index. 

We will iterate from i:=0 to n
So for index i -> instead of checking from r-1 to k-1 . We can simply add k-(r-1) number of substring to the answer. (For computing k,  we can have consonant index array precomputed for every index)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```golang []
func isVowel(c byte)bool{
    if strings.Contains("aeiou",string(c)){
        return true
    }
    return false
}

func vowelCountSatisfy(vowelCount map[byte]int)bool{
    for _,c:=range([]byte("aeiou")){
        if vowelCount[c]==0{
            return false
        }
    }
    return true
}


func countOfSubstrings(word string, k int) int64 {
    n:=len(word)
    nextConsonant:=make([]int, n)
    ans:=0

    // computing nextConsonant Index for every position
    computeNextConsonant:=func(){
        lastConsonantIdx:=n
        for i:=n-1;i>=0;i--{
            nextConsonant[i]=lastConsonantIdx
            if !isVowel(word[i]){
                lastConsonantIdx=i
            }
        }
    }

    computeNumSubstring:=func(){
        r:=0
        consonantCount:=0
        vowelCount:=make(map[byte]int)

        for l:=0;l<n;l++{
            for r<n && (consonantCount <k || vowelCountSatisfy(vowelCount)==false){
                // It means word[i:r] is not satisfying. So we include current(rth) character as well.
                vowelCount[word[r]]++
                if !isVowel(word[r]){
                    consonantCount++
                }
                r++
            }
            if r>=n && (consonantCount <k || vowelCountSatisfy(vowelCount)==false){
                // Not possible to achieve the requirements.
                break
            }

            // If reached here consonantCount >= k
            if consonantCount==k{
                ans += nextConsonant[r-1]-(r-1)
            }
            vowelCount[word[l]]--
            if !isVowel(word[l]){
                consonantCount--
            }
        }
    }

    computeNextConsonant()
    computeNumSubstring()
    return int64(ans)
}
```