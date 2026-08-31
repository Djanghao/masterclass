# ACTUAL EXPLANATIONS and DRY RUN of what we do and  WHY WE DO IT THIS WAY?

**Author:** Silencer312
**Votes:** 25
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5883785/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5883785/)

---

I doubt anyone understands how and why the solution works, and if you are someone like me who is struggling, this is for you.

I read up extensively, did dry runs and then came to an understanding of how to solve similar questions

Big writeup ahead, hope it helps!

# Initial Thoughts:

- this is a hard question for a reason and involves a gcd counting trick, that is not something you can come up with on the spot
- Its not even intuitive, but once you understand this, it is easy to remember, and can help solve future problems
- We need to take all pairs, get their gcds, sort it and then run queries on it
- We definitely cannot look at all pairs in a nested loop cuz of constraints
- Picking an index after getting all gcds, also means sorting and then returning
- Since nums can be max of 5*10^4, this means that is the max gcd we will be dealing with
- So if we can count for each number from 1 to nums_max, how many pairs have a gcd[i] where 1<=i<=nums_max
- Then we can easily run queries on it. Because then all gcds are sorted, we will have a gcd[i] array where all index are gcds and gcd[i] are count of pairs

# Intuition on Binary Search:

- suppose we wanna find 5th index of sorted gcds, how would we do it
- consider gcd[] = [0,2,5,6,6,7]. we ignore index 0, since 0 cannot be a gcd
- gcd of 1 is a gcd of 2 pairs. gcd=2 of 5 pairs. Remember index is the gcd and gcd[i] is the count
- so what will be the gcd value at index 8? we have 2 pairs of gcd 1, 5 pairs of gcd 2 and 6 pairs of gcd 3
- So if we write down the gcds and sort it, we get something like [1,1,2,2,2,2,2,3,3,3,3,3,3]. Take the 8th index we get 3.
- Notice what we did, we basically counted like a prefix sum, and then found the position where 8 can get inserted
- So if we generate a prefix sum array of gcd counts, we can do a binary search and find the answer to queries.
- so prefix = [0,2,7,13,19...] for 8th index, we see that 8th value will lie between 7 and 13. So that has gcd[i] where i = gcd = 3
- Since we want the 8th value, we want to find the prefix count x where x >= 8. 7 wont work. 8 and above will work. But we need smallest such x.
- This is how we will binary search

# Intuition on Counting GCDs:
- Now lets look at counting the gcds of pairs
- take eg: [4,4,2,1]. We have pairs (4,4), (4,2), (4,1), (4,2), (4,1), (2,1)
- and gcds as 4,2,1,2,1,1. Sorted = [1,1,1,2,2,4]. 3 pairs have gcd = 1, 2 pairs have gcd=2 and 1 pair has gcd=4
- Since we know max number will be 4, max gcd will be 4. We will start building gcd[] in reverse
- Why reverse is good? Because no number less than 4 will have a gcd of 4, that is obvious because gcd is greatest common divisor.
- 4 cannot divide a number < 4.
- So now 4 can only be gcd of 2 numbers that are 4 or more. Actually since gcd is greatest divisor, it means one number HAS to be 4.
- Also, the other number will ALWAYS be a multiple of 4. This is an observation that is so simple and obvious but tricky to come up with
- So now we wanna form pairs with a number that is 4, and another number that is multiple of 4
- If we are counting numbers with gcd 4, and wanna check if there are numbers in the array that are multiples of 4
- The easiest way is to create a frequency counter map of all numbers to quickly get the count of numbers
- So our freq map for example is freq = {1:1, 2:1, 4:2}
- So we start reverse from 4. And we count all numbers that are 4 or multiples of 4, because only they will have a gcd of 4
- Here we get count = 2.
- Now we need to find out how many pairs can we form with 2 numbers. Its easy to see only 1 pair, but what if count is big, whats an easy way to find it?
- nC2 = n!/( (n-2)!. 2! ) = n(n-1)/2. Memorize this, its a useful formula.
- so for gcd = 4, we have count = 2 and pairs = 2(1)/2 = 1
- 1 pair that has a gcd 4
- so gcd = [0,0,0,0,1] index 0 is ignored
- now we come to i = 3, we have 0 numbers and 0 pairs of numbers that have gcd=3
- gcd = [0,0,0,0,1]
- Now for i = 2. We count numbers that are 2 or multiples of 2. We get count = 3
- pairs = 3(2)/2 = 3
- So 3 pairs of numbers have gcd = 2
- Lets verify this first. one number has to be 2 and other a multiple. SO looking at input [4,4,2,1]
- we get pairs (2,4), (2,4) and.... thats only 2 pairs, but our formula gave us 3.
- Remember the gcd at 4 had a pair (4,4) and when we counted the pairs, we counted (4,4) which is wrong

# Inclusion Exclusion Principle:

- This is the inclusion exclusion principle that is at work here.
- Lets look at it briefly
- Inclusion Exclusion Principle is a counting technique where we count elements satisfying a property
- while making sure we dont double count elements that satisfy both properties
- Say we wanna count number of people having at least 1 dog or 1 cat.
- We add up the total number of people having cats and dogs and subtract the people having both cat and dog both
- In sets A U B = A + B - (A intersect B)
- This can be extended to more elements
-- A U B U C = A + B + C - (A intersect B) - (A intersect B) - (A intersect B) + (A intersect B intersect C)
- This can be generalized to A U B U ... X -> but that is deep into maths and out of scope for me

# Applying the exlusion principle:

- So now we know we double counted gcd pair (4,4).
- In fact if we had a number 8, gcd of 4 will include a pair of (4,8)
- And if we find gcd of 2, we will look at multiples of 2 which are 2,4,6,8. And again choosing pairs will count pair of (4,8)
- So after counting pairs, of say gcd i, we need to subtract counts gcds of every multiple of 2 starting from 2nd multiple
- so initially we counted pairs (2,4), (2,4), (2,8), but then also had included pairs (4,4) and (4,8) and any other pairs if there were more multiples present
 - So we need to remove counts of pairs we double counted, and these would be counts at each multiple of 2, starting from 4.
- So 5 - 2 = 3. We removed (4,4) and (4,8) which were double counted, and anyways their gcd is 4. Not 2
- So coming to our example, for i=2, we had pairs = 3
- Then we loop from 2nd multiple of 2 = 4->gcd_max
- And subtract counts. So subtract gcd[4] = 4
- Pairs = 3-1 = 2. And gcd = [0,0,2,0,1]
- Now for i = 1. We count numbers = 4. Pairs = 4.3/2 = 6
- Now subtract from every 2nd multiple of 1. So subtract 2,3,4 = 6-2-1 = 3
- So there are 3 pairs with gcd = 3
- Which are (1,2), (1,4), (1,4)

# Explanation on Binary Search:

- Now gcd = [0,3,2,0,1]
 - As discussed above we create a prefix sum array = [0,3,5,5,6]
- And queries = [5,3,1,0]. Remember we need the 5th index when all gcds are sorted, not 5th count
- Lets write the gcd sorted = [1,1,1,2,2,4]. So 5th index is 4. We need to go an index higher. So bisect right is best for this
- So in our case, we are to find 5th index. Means we are looking for gcd where count becomes 6 or more
- That means if we do bisect right at 5, it will return the rightmost index where (count = 5) + 1
- count basically signifies indices. If gcd 1 has a count 5. Means there are 5 indices where gcd = 1
- Then if we see that gcd 2 has a prefix count of 7. Means gcd 1 and 2 have a combined total count of pairs = 7
- And since we determined, because of index to count relation, we need to go +1
- So if we bisect right for given query value, say 5. We will end up at gcd where count becomes > 5, and this will be lowest index where count > 5
- So we can easily binary search and find ans = [4,2,1,1] which is correct according to given example



# Time complexity:
- O(mlogm + qlogm) where q = queries length, m is max_num <= 5*10^4
- We look at every query and do a binary search over array of size m so qlogm 
- The for loop is doing a harmonic skip, the outer loop runs for m times, but every iteration, we dont look at all m numbers
- if suppose we have m numbers, and the first iteration looks at all m numbers
- next one looks at m/2 numbers, next m/3 and so on
- This will have a time complexity of m/1 + m/2 + m/3 +... m/m = m(1/1 + 1/2 + 1/3 + ... 1/m) = mlogm
- This is harmonic sequence and involves maths, interested readers can look it up
- There are other small time factors we ignore, like to build the counter map, finding the max number and building the prefix array
- These take O(n + m + m) time but are smaller than logm so we ignore it. Here n = length of nums
- So total time: O(mlogm + qlogm)

# Space complexity:
- space: O(m + n) for prefix sum array, and counter freq map


# Code
```python3 []
class Solution:
    def gcdValues(self, nums: List[int], queries: List[int]) -> List[int]:
        

        max_gcd = max(nums)
        # counter = collections.Counter(nums) # freq count of numbers, can do manually too
        # Counter does slow down the python code on leetcode especially
        # Tried with a defaultdict and normal dict, both gave similar results
        # So prefer to use defaultdict
        counter = collections.defaultdict(int)
        for n in nums:
            counter[n] += 1

        gcd = [0] * (max_gcd + 1) # we wanna reach index of max_gcd

        for i in range(max_gcd, 0, -1): # go from max_gcd -> 1
            count = 0 # count of numbers that are i or multiples of i
            for j in range(i, max_gcd + 1, i): # since we need multiples of i, add step of i
                count += counter[j]

            # now we find the total pairs we can form and add that to gcd
            gcd[i] = count * (count - 1) // 2

            # now use exclusion to remove double counted pairs
            # This starts from 2nd multiple of i
            for j in range(2 * i, max_gcd + 1, i):
                gcd[i] -= gcd[j]

        # now prefix sum array
        prefix = [0] * (max_gcd + 1)
        curr = 0
        for i in range(1, max_gcd + 1):
            curr += gcd[i]
            prefix[i] += curr

        # now process the queries
        res = []
        for q in queries:
            res.append(bisect.bisect_right(prefix, q))

            # we will implement our binary search for practice
            # This is also slower on leetcode, so prefer to use bisect when you can
            # But remember, might be asked to implement the binary search, so keep practicing
            # lo, hi = 1, max_gcd + 1
            # while lo < hi:
            #     mid = lo + (hi - lo) // 2
            #     if prefix[mid] <= q: # look higher. Remember, we want mid = gcd that is just greater than where we find q. So if <= q, this doesnt have our answer and we look higher
            #         lo = mid + 1
            #     else: # but if prefix[mid] > q, we wanna look lower and this CAN be our answer, cuz we want smallest gcd where prefix > q
            #         hi = mid # ending up with hi = mid, means dont need +1 in mid calc
            # res.append(lo)

        return res
```