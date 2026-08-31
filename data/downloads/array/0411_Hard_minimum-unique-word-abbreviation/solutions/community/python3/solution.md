# Recursively find all possible abbreviations for a string

**Author:** lyzmusic
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/5564902/](https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/5564902/)

---

# Code
```
class Solution:
    def minAbbreviation(self, target: str, dictionary: List[str]) -> str:
        dict_all_abbr = set()
        for word in dictionary:
            # With this little optimization the solution got AC. We can do more optimization on things but i just skip here.
            if len(target) != len(word):
                continue
            all_abbr = self.allAbbreviations(word)
            dict_all_abbr.update(set(all_abbr))
        all_target_abbr = self.allAbbreviations(target)
        all_target_abbr.sort(key = lambda x:self.countAbbreLength(x))
        for target_abbr in all_target_abbr:
            if target_abbr not in dict_all_abbr:
                return target_abbr

    def countAbbreLength(self, abbr: str):
        length = 0
        i = 0
        while i < len(abbr):
            if not abbr[i].isdigit():
                length += 1
                i += 1
            else:
                k = i
                while k < len(abbr):
                    if abbr[k].isdigit():
                        k += 1
                    else:
                        break
                i = k
                length += 1
        return length

    # Finds all abbreviations for a string
    def allAbbreviations(self, target: str) -> List[str]:
        if(len(target) == 1):
            return [target, '1']
        all_abbr = []
        prefix = target[:-1]
        last_char = target[-1]
        all_prefix_abbrs = self.allAbbreviations(prefix)
        for prefix_abbr in all_prefix_abbrs:
            if prefix_abbr[-1].isalpha():
                all_abbr.extend([prefix_abbr + last_char, prefix_abbr + '1'])
            else:
                all_abbr.append(prefix_abbr + last_char)
                # Also add the case where the last char is combined with the previous number
                i = len(prefix_abbr) - 1
                k = i
                while k >= 0:
                    if prefix_abbr[k].isdigit():
                        k -= 1
                    else:
                        break
                digit = int(prefix_abbr[k+1:i+1]) + 1
                abbr = prefix_abbr[:k+1] + str(digit)
                all_abbr.append(abbr)
        return all_abbr




                
        
```