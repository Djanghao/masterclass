# just prefix

**Author:** liarchlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/5917405/](https://leetcode.com/problems/roman-to-integer/solutions/5917405/)

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
```racket []
(define presets
	'(
		("M"	.	1000)
		("CM"	.	900)
		("D"	.	500)
		("CD"	.	400)
		("C"	.	100)
		("XC"	.	90)
		("L"	.	50)
		("XL"	.	40)
		("X"	.	10)
		("IX"	.	9)
		("V"	.	5)
		("IV"	.	4)
		("I"	.	1)))

(define (repeat-string str n)
	(if (zero? n)
		""
		(string-append str (repeat-string str (sub1 n)))))

; \u76F4\u63A5\u6839\u636E\u524D\u7F00\u6765\u5904\u7406\u5C31\u884C\uFF0C\u8D2A\u5FC3\u5339\u914D\u5C31\u884C
(define (mods rns str dw)
	(if (string-prefix? rns str)
		(let [(next_rns_data (mods (substring rns (string-length str)) str dw))]
			(cons (+ dw (car next_rns_data)) (cdr next_rns_data)))
		(cons 0 rns)))

(define (itr rns ps)
	(if (or (empty? ps) (empty? rns))
		0
		(letrec
			[
				(p (car ps))
				(now_rns_data (mods rns (car p) (cdr p)))
			]
			(+
				(car now_rns_data)
				(itr (cdr now_rns_data) (cdr ps)))))
)

(define/contract (roman-to-int s)
	(-> string? exact-integer?)
		(itr s presets)
	)

(let
	[(ins "MCMXCIV")]
	(displayln (roman-to-int ins))
	)

```