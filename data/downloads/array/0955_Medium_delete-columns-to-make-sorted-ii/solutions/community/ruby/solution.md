# ruby, two solutions

**Author:** chassot
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/4542399/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/4542399/)

---

# First, short and simple

Rebuild the strings one char at a time, ensuring the new strings remain sorted. Eventually take the difference of size from an original string to a new string. (The first of each, but they're all the same size.)

This creates new strings and arrays at each char column, and compares the whole incremental strings at each step, so a bit wasteful.

### Code

```ruby
def min_deletion_size(ss)
  ss[0].size -
  ss.map(&:chars).transpose.inject(ss.size.times.map{""}) do |a,cs|
    a.zip(cs).map(&:join).then{|b|b.sort == b ? b : a }
  end[0].size
end
```

# Second, slightly faster

This only compares each char pair once. Requires a bit of longer explanation tho.

Given the strings `ss=["zxgaz","rxfbz","syfaz"]`

Make a table `m` comparing each char to the one below it:
```
ss[0]:  z  x  g  a  z
 m[0]:  1  0  1 -1  0
ss[1]:  r  x  f  b  z
 m[1]: -1 -1  0  1  0
ss[2]:  s  y  f  a  z
```

The comparison is using `<=>`, so `-1 = a<b`, `0 = a==b`, `1 = a>b`.


Keep dropping the first column while it contains `1`, as that means it's keeping the list unsorted. These are the deletions we're counting for the answer.

```text
drop & count 1 deletion
 \u25BC
 1  0  1 -1  0
-1 -1  0  1  0
```

With no leading `1`s left, we look for rows starting with with `-1`. These are unambiguously sorted, so we don't need to look at them anymore, we drop them:

```text
        0  1 -1  0
drop \u25BA -1  0  1  0
```

We now have only `0`s left in the first column, which means equal chars, so we need to look at the next column. Drop the front column and loop again:

```text
drop
\u25BC 
0  1 -1  0
```

Keep looping until the matrix is empty. Return the count.

### Code

```ruby
# a tiny helper class to clarify the matrix operations
class Matrix < Array
  def cshift        = each{|row| row.delete_at 0 } # drops first column
  def cmember?(i,x) = any?{|row| row[i] == x }     # column i contains x
end

def min_deletion_size(ss)
  n, m = 0, Matrix[*ss.map(&:bytes).transpose
            .map{|cs| cs.each_cons(2).map{_1<=>_2} }.transpose]

  while m.dig(0,0) # fast way to check if not empty
    next (m.cshift; n+=1) if m.cmember? 0, 1 # del col 0 while it breaks sorting (contains 1)
    m.reject!{|head,*| head == -1 }          # drop rows already deemed sorted (start with -1)
    m.cshift                                 # drop col 0, need to look at next col (only 0s left)
  end
  return n
end
```