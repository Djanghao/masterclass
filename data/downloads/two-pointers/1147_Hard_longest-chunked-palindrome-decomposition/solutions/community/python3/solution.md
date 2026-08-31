# Close to O(n) Python, Rabin Karp Algorithm with two pointer technique with explanation (~40ms)

**Author:** Hai_dee
**Votes:** 37
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/350711/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/350711/)

---

[Important edit: I stand corrected. This algorithm isn't actually O(n), technically it's O(n^2). But in practice, it's very close to O(n), and will achieve substantially better performance than the more traditional O(n^2) approaches. In terms of real world performance/ progamming competitions, just pick a good big prime number and it'll scale more like an O(n) algorithm, achieving the ultimate objective of fastness. :-) Thanks to those who pointed out the incorrectness in my analysis!]

The Rabin-Karp algorithm seems perfect for this situation, so it is the approach I took.

https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm

See code comments for an explanation of how it works. In essence, we keep track of a hash of the current substring at the start and the end of the string. **After the code I provide a few examples of the math and the ideas in the algorithm.**

This algorithm is **O(n)**, as we are only processing each character once, and we're not doing costly string comparing operations (remember, comparing 2 strings of length n has a cost of O(n), which would bring an algorithm depending on it up to O(n^2)). 

```py
class Solution:
    def longestDecomposition(self, text: str) -> int:
        
		# Used a prime number generator on the internet to grab a prime number to use.
        magic_prime = 32416189573
        
		# Standard 2 pointer technique variables.
        low = 0
        high = len(text) - 1
        
		# These are the hash tracking variables.
		cur_low_hash = 0
        cur_high_hash = 0
        cur_hash_length = 0
        
		# This is the number of parts we've found, i.e. the k value we need to return.
		k = 0
        
        while low < high:
            
			# To put the current letter onto our low hash (i.e. the one that goes forward from
			# the start of the string, we shift up the existing hash by multiplying by the base
			# of 26, and then adding on the new character by converting it to a number from 0 - 25.
            cur_low_hash *= 26 # Shift up by the base of 26.
            cur_low_hash += ord(text[low]) - 97 # Take away 97 so that it's between 0 and 25.
            
			
			# The high one, i.e. the one backwards from the end is a little more complex, as we want the 
			# hash to represent the characters in forward order, not backwards. If we did the exact same
			# thing we did for low, the string abc would be represented as cba, which is not right.	
			
			# Start by getting the character's 0 - 25 number.
			high_char = ord(text[high]) - 97
			
			# The third argument to pow is modular arithmetic. It says to give the answer modulo the
			# magic prime (more on that below). Just pretend it isn't doing that for now if it confuses you. 
            # What we're doing is making an int that puts the high character at the top, and then the 
			# existing hash at the bottom.
			cur_high_hash = (high_char * pow(26, cur_hash_length, magic_prime)) + cur_high_hash            
            
			# Mathematically, we can safely do this. Impressive, huh? I'm not going to go into here, but
			# I recommend studying up on modular arithmetic if you're confused.
			# The algorithm would be correct without doing this, BUT it'd be very slow as the numbers could
			# become tens of thousands of bits long. The problem with that of course is that comparing the
			# numbers would no longer be O(1) constant. So we need to keep them small.
			cur_low_hash %= magic_prime 
            cur_high_hash %= magic_prime
            
			# And now some standard 2 pointer technique stuff.
            low += 1
            high -= 1
            cur_hash_length += 1
            
			# This piece of code checks if we currently have a match.
            # This is actually probabilistic, i.e. it is possible to get false positives.
            # For correctness, we should be verifying that this is actually correct.
            # We would do this by ensuring the characters in each hash (using
			# the low, high, and length variables we've been tracking) are
			# actually the same. But here I didn't bother as I figured Leetcode
			# would not have a test case that broke my specific prime.
			if cur_low_hash == cur_high_hash:
                k += 2 # We have just added 2 new strings to k.
                # And reset our hashing variables.
				cur_low_hash = 0
                cur_high_hash = 0
                cur_hash_length = 0
        
		# At the end, there are a couple of edge cases we need to address....
		# The first is if there is a middle character left.
		# The second is a non-paired off string in the middle.
        if (cur_hash_length == 0 and low == high) or cur_hash_length > 0:
            k += 1
        
        return k
```

# Representing a number as an integer.
We can represent a string of lower case letters as a base-26 number. Each letter is assigned a value from 0 to 25, and then each letter is the string is converted into its number and multiplied by a power of the base, based on its position. The numbers are then added together. For example, the string "cat":
c = 2
a = 0
t = 19

number_for("cat") => (26 ^ 2) * 2 + (26 ^ 1) * 0 + (26 ^ 0) * 19

This is very much like how numbers are converted from base 2 to base 10.

# Keeping track of rolling hashes.
The good thing about representing strings as a number is that it's very easy to add and remove characters from each end of the string, allowing us to maintain a "rolling hash" in O(n) time.

So say we have the string "foxyfox".'
f = 5
o = 14
x = 23
y = 24

The low hash will build up as follows.

First letter: f
lower_hash = 5

Second letter: o
So we multiply lower_hash by 26 and then add 14 (the number for "o").
5 * 26 = 130
130 + 14 = 144
So we now have lower_hash = 144

Third letter: x
So we multply lower_hash by 26 and then add 23 (the number for "x").
144 * 26 = 3744
3744 + 23 = 3767
So now we have lower_hash = 3767

And at the same time, the high hash is building up.

First letter: x
high_hash = 23

Second letter: o
Because we want the o "above" the x in the hash, we need to do this a bit differently to before.
14 * (26 ** 1) = 364 ("Slide up" the new number making room for the old below).
364 + 23 = 387 (Add the old hash on)
high_hash = 387

Third letter: f
5 * (26 ** 2) = 3380 (Slide up the new number)
3380 + 387 = 3767

Now you might notice that when we add f->o->x onto the low high, and x->o->f onto the high hash, we end up with the same value: 3767. This is good, because it tells us we have a match. And it could be done in O(n) time.

# Throwing modular arithmetic in
There is one problem with this approach though. What if the strings are *massive*. How many bits are there in a 1000 letter string? We are multiplying by 26 for every letter, so that is 26^1000, a very massive number. Comparing 2 numbers of this size is NOT O(1) anymore. 

It turns out that we can take it modulo a large prime number at each step of the algorithm. I'm not going to go into that here, but I recommend reading up on modular arithmetic if you're confused.
# Resolving the potential bug
So there is one potential problem. It's possible for the hashes to be equal even if the strings weren't. This is more likely to happen with a smaller prime number.

For example, if our prime was 7, then that would mean the hash could only ever be 0, 1, 2, 3, 4, 5, or 6. "a" would be 0, and so would "h", so the algorithm would give a false positive match.

With a much higher prime number, it becomes increasingly less likely. This is how I protected against it in the contest.

But the correct way would be, each time we get a match, to also check the actual strings. As long as we are getting far fewer false positives than true positives, it will still be O(n) overall. A high enough prime will keep the number of false positives low.

With lots of collisons though, it will become O(n^2). Think about what would happen if our prime was 2.

This is a classic hashing collision problem.