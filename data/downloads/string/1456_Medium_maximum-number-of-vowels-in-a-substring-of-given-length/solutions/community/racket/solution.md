# C+, Racket & Haskell Solutions using ALGORITHMS

**Author:** code_report
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/648285/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/648285/)

---

**C++ Solution:**
```cpp
bool vowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int maxVowels(string s, int k) {
    vector<int> v(s.size() + 1, 0);
    transform(s.begin(), s.end(), v.begin() + 1, [&](auto e) { return vowel(e); });
    partial_sum(v.begin(), v.end(), v.begin());
    return inner_product(v.begin() + k, v.end(), v.begin(), 0,
        [](auto a, auto b) { return max(a, b); }, 
        minus{});
}
```
    
**Racket Solution:**
```lisp
(require threading)
(require algorithms) ;; scanl, sliding        

(define (is-vowel? c)
  (list? (member c (string->list "aioeu"))))        
        
(define (max-vowels s k)
  (~>> (map is-vowel? (string->list s))
       (map (\u03BB (x) (if x 1 0)))
       (scanl +)
       (sliding _ (+ k 1))
       (map (\u03BB (x) (- (last x) (first x))))
       (foldl max 0)))
```
**Haskell Solution:**
```hs
vowel c = elem c "aeoiu"
sliding k = divvy k 1

maxVowels k = maximum 
            . map (\\x -> (last x) - (head x)) 
		    . sliding (k+1)
		    . scanl (+) 0
			. map (\\c -> if vowel c then 1 else 0)