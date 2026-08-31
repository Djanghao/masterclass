# Ruby find subsets

**Author:** IFilonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3401107/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3401107/)

---

# Code
```
# @param {String[][]} favorite_companies
# @return {Integer[]}
def people_indexes(favorite_companies)
  favorite_companies.map.with_index do |user_i_companies, user_index|
    user_has_subset = false
    favorite_companies.select.with_index { |_c, j| j != user_index }.each do |companies|
      user_has_subset = true if (user_i_companies - companies).empty?
    end
    user_index if user_has_subset == false
  end.compact.sort
end
```