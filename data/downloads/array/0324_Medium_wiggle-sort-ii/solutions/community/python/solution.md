# 3 lines Python, with Explanation / Proof

**Author:** StefanPochmann
**Votes:** 398
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/77678/](https://leetcode.com/problems/wiggle-sort-ii/solutions/77678/)

---

Solution
---

Roughly speaking I put the smaller half of the numbers on the even indexes and the larger half on the odd indexes.

    def wiggleSort(self, nums):
        nums.sort()
        half = len(nums[::2])
        nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]

Alternative, maybe nicer, maybe not:

    def wiggleSort(self, nums):
        nums.sort()
        half = len(nums[::2]) - 1
        nums[::2], nums[1::2] = nums[half::-1], nums[:half:-1]

---

**Explanation / Proof**
---

I put the smaller half of the numbers on the even indexes and the larger half on the odd indexes, both from right to left:

    Example nums = [1,2,...,7]      Example nums = [1,2,...,8] 

    Small half:  4 . 3 . 2 . 1      Small half:  4 . 3 . 2 . 1 .
    Large half:  . 7 . 6 . 5 .      Large half:  . 8 . 7 . 6 . 5
    --------------------------      --------------------------
    Together:    4 7 3 6 2 5 1      Together:    4 8 3 7 2 6 1 5

I want:

- Odd-index numbers are larger than their neighbors.

Since I put the larger numbers on the odd indexes, clearly I already have:

- Odd-index numbers are larger than **or equal to** their neighbors.

Could they be "equal to"? That would require some number M to appear both in the smaller and the larger half. It would be the largest in the smaller half and the smallest in the larger half. Examples again, where S means some number smaller than M and L means some number larger than M.

    Small half:  M . S . S . S      Small half:  M . S . S . S .
    Large half:  . L . L . M .      Large half:  . L . L . L . M
    --------------------------      --------------------------
    Together:    M L S L S M S      Together:    M L S L S L S M

You can see the two M are quite far apart. Of course M could appear more than just twice, for example:

    Small half:  M . M . S . S      Small half:  M . S . S . S .
    Large half:  . L . L . M .      Large half:  . L . M . M . M
    --------------------------      --------------------------
    Together:    M L M L S M S      Together:    M L S M S M S M

You can see that with seven numbers, three M are no problem. And with eight numbers, four M are no problem. Should be easy to see that in general, with n numbers, floor(n/2) times M is no problem. Now, if there were more M than that, then my method would fail. But... it would also be impossible:

- If n is even, then having more than n/2 times the same number clearly is unsolvable, because you'd have to put two of them next to each other, no matter how you arrange them.
- If n is odd, then the only way to successfully arrange a number appearing more than floor(n/2) times is if it appears exactly floor(n/2)+1 times and you put them on all the even indexes. And to have the wiggle-property, all the other numbers would have to be larger. But then we wouldn't have an M in both the smaller and the larger half.

So if the input has a valid answer at all, then my code will find one.