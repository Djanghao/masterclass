# Ruby | Hashmap { content -> array of files }

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2599128/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2599128/)

---

Create a hashmap where keys are files contents and values are arrays of paths of files
that have this (the same) content.
After that all we should do is select those values (arrays) of the hashmap that have 
size more than one (that means two or more files have this content).
```ruby
def find_duplicate(paths)
    contents = Hash.new { |h,k| h[k] = Array.new }
    paths.each do |group| 
        arr = group.split" "
        path = arr.shift
        arr.each do |file|
            par_idx = file.index('(')
            contents[file[par_idx + 1...-1]] << ( path + "/" + file[...par_idx] )
        end
    end
    contents.values.select { _1.length > 1}
end
```
<hr>

# Tests:
```ruby
require 'test/unit'

class Test_find_duplicate < Test::Unit::TestCase
    def test_
        assert_equal [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]].sort, 
            find_duplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]).sort
        assert_equal [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]].sort,
            find_duplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]).sort
    end
end
```
