# ruby 2-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/4279155/](https://leetcode.com/problems/match-substring-after-replacement/solutions/4279155/)

---

```
def match_replacement(s, sub, mappings)

  h = mappings.group_by(&:shift).to_h{ [_1, "[#{ _2.join << _1 }]" ] }

  /#{sub.gsub /[ #{h.keys.join}]/, &h }/ === s

end
```