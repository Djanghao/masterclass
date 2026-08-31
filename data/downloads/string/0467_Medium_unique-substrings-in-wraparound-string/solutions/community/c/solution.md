# 🔮 [Diego's Understandable Explanations] C++

**Author:** diealecel
**Votes:** 131
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/458775/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/458775/)

---

Hi, I'm trying to make easily understandable explanations for everyone. Hopefully I did a good job here.
*Please upvote if this post helped you, so that others can find it.*

**The insight**
The problem insight comes from recognizing that there is a very specific infinite set of possible substrings that end in a particular character. Let's look at an example.

If you want to think about the set of possible substrings that end in **z**, then we have the following...
```
{z, yz, xyz, wxyz, ...}
```

Therefore, you can think of `p` as containing a subset of this infinite set for the ending character **z**. The key insight comes from noticing that this subset in `p` has the interesting property that having one element of this subset *implies* having others.

Using the above example, we see that having "wxyz" implies having "xyz", which implies having "yz", which implies having "z". In other words, you cannot have the substring "wxyz" but not have the substring "z", since one necessarily implies the other.

Oddly enough, we see that there is a connection between the number of elements in this subset and the length of its longest element: the size of the subset is the length of its longest element. In particular, if the longest substring ending in **z** that we find is "wxyz", then we can confidently say that there are 4 substrings that end in **z**.

This means that if we want to find all the possible substrings that end in a particular character (i.e. **z**) in `p`, then we only need to find the longest substring in `p` that ends with **z** and take its length.

**Wrapping up**
Now you have a method to find all the substrings in `p` that end in a particular character. Last I checked, there are only 26 possible characters in the alphabet. So now you can find all the substrings in `p` that end in each character and add all of them!

This may sound some alarm in some of you, but don't worry: all of the substrings you're adding are indeed unique. After all, they end in different characters by definition, so none of them can be the same.

**A solution**
This solution can be optimized in some ways for improved performance, but I leave that exercise to the reader.

```
// Remember that chars are glorified ints.
bool is_next(char a, char b) { return a == 'z' ? b == 'a' : a + 1 == b; }

int findSubstringInWraproundString(string p) {
    unordered_map<char, int> max_lengths;

    int max_length = 1; // The first character is one character long.
    for (size_t i = 0; i < p.size(); i++) {
		// Is this the longest substring I've seen ending in this character?
        if (max_lengths.find(p[i]) == max_lengths.end()) {
			// Never seen this ending character, instantiate it.
            max_lengths[p[i]] = max_length;
        } else {
			// Maybe. Pick the longer one.
            max_lengths[p[i]] = max(max_length, max_lengths[p[i]]);
        }
		
		// Is the next character consecutive?
        if (i + 1 < p.size() && is_next(p[i], p[i + 1])) max_length++;
        else max_length = 1;
    }
	
	// Add all lengths!
    int res = 0;
    for (const pair<char, int>& kv : max_lengths) res += kv.second;
    return res;
}
```

**What? How am I supposed to get that insight to begin with?**
Great question. I don't know. If you have an idea how, please comment below to help others.