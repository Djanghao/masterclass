# I ❤ Ruby

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/3355645/](https://leetcode.com/problems/ambiguous-coordinates/solutions/3355645/)

---

```ruby
def ambiguous_coordinates s
    f = -> s do
        r, z = [s], s.size
        return r if z == 1
        return (s[/^0/] ? [] : r) if s[/0$/]
        return ['0.' + s[1..]] if s[/^0/]
        (1...z).reduce(r) { _1 << s.clone.insert(_2, ?.) }
    end
    (1...(s = s[1..-2]).size).flat_map do | i |
        f.(s[...i]).product(f.(s[i..])).map do
            "(#{_1.first}, #{_1.last})"
        end
    end
end
```