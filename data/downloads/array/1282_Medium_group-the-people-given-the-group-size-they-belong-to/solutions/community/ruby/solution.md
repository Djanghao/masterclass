# Ruby Solution

**Author:** bacchist
**Votes:** 5
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/459488/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/459488/)

---

```ruby
def group_the_people(group_sizes)
  people = Hash.new() { |h, k| h[k] = Array.new }
  groups = []
  group_sizes.each.with_index { |size, idx| people[size] << idx }
  people.each { |size, ids| groups << ids.pop(size) until ids.empty? }
  groups
end
```