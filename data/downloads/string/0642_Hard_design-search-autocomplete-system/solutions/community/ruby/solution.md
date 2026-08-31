# Ruby, Brute Force, Array

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/5269929/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/5269929/)

---

# Code
```
class AutocompleteSystem
  attr_accessor :store, :query
  def initialize(sentences, times)
    @store = sentences.zip(times)
    @query = ''
  end

  def input(c)
    if c != '#'
      query << c
      return search(query)
    else
      query.chomp!('#')
      insert(query)
      @query = ''
    end
    []
  end

  private
  def search(query)
    results = store.select { |sentence, _priority| sentence.start_with?(query) }
    results.sort_by! { |sentence, priority| [-priority, sentence]}
    results[0..2].map { |sentence, _priority| sentence }
  end

  def insert(query)
    existing_index = store.index { |sentence, _priority| sentence == query }
    if existing_index
      store[existing_index][1] += 1
    else
      store << [query, 1]
    end
  end
end
```