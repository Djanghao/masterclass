# Ruby Solution using RegEx

**Author:** guswhitten
**Votes:** 2
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/3141474/](https://leetcode.com/problems/goal-parser-interpretation/solutions/3141474/)

---

```
# @param {String} command
# @return {String}
def interpret(command)
    map = {'()' => 'o', '(al)' => 'al'}
    re = Regexp.new(map.keys.map { |x| Regexp.escape(x) }.join('|'))
    
    command.gsub(re, map)
end
```