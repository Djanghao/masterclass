# Accepted Python Solution With Explanation

**Author:** grodrigues3
**Votes:** 313
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/79209/](https://leetcode.com/problems/palindrome-pairs/solutions/79209/)

---

The basic idea is to check each word for prefixes (and suffixes) that are themselves palindromes.  If you find a prefix that is a valid palindrome, then the suffix reversed can be paired with the word in order to make a palindrome.  It's better explained with an example.

    words = ["bot", "t", "to"]

Starting with the string "bot".  We start checking all prefixes.  If `"", "b", "bo", "bot"` are themselves palindromes.  The empty string and "b" are palindromes.  We work with the corresponding suffixes ("bot", "ot") and check to see if their reverses ("tob", "to") are present in our initial word list.  If so (like the word to"to"), we have found a valid pairing where the reversed suffix can be **prepended** to the current word in order to form "to" + "bot" = "tobot".

You can do the same thing by checking all suffixes to see if they are palindromes.  If so, then finding all reversed prefixes will give you the words that can be **appended** to the current word to form a palindrome.

The process is then repeated for every word in the list.  Note that when considering suffixes, we explicitly leave out the empty string to avoid counting duplicates.  That is, if a palindrome can be created by appending an entire other word to the current word, then we will already consider such a palindrome when considering the empty string as prefix for the other word.  

        def is_palindrome(check):
            return check == check[::-1]
    
        words = {word: i for i, word in enumerate(words)}
        valid_pals = []
        for word, k in words.iteritems():
            n = len(word)
            for j in range(n+1):
                pref = word[:j]
                suf = word[j:]
                if is_palindrome(pref):
                    back = suf[::-1]
                    if back != word and back in words:
                        valid_pals.append([words[back],  k])
                if j != n and is_palindrome(suf):
                    back = pref[::-1]
                    if back != word and back in words:
                        valid_pals.append([k, words[back]])
        return valid_pals