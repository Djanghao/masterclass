# 487 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/3301936/](https://leetcode.com/problems/making-file-names-unique/solutions/3301936/)

---

```ruby
def get_folder_names a
    h = {}
    a.map! do | s |
        unless v = h[s]
            h[s] = 1
            s
        else
            v += 1 while h[x = "#{s}(#{v})"]
            h[x] = 1
            h[s] = v + 1
            x
        end
    end
end
```