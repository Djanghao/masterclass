# All Languages: Hashtables and Chunks

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/3222549/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/3222549/)

---

# Intuition
Collect indices of the group size array into hash table. Hash table has keys equal to group sizes and values are the person indidex arrays. Then split array of person indicies into chunks with the length equal to the group size.

# Approach
## Standard approach for implementations:
1) Generate list of indices;
2) Group indices by group size array values and put into map;
3) Split each map value list into chunks with the size of key;
4) Flatten.

## Specifics of emplementation
1. C++: Unordered map and generics;
2. Java: Hashmap and streams;
3. Python: Dictionary and `itertools`.
3. Python3: Dictionary without `itertools`;
4. C: Naive look-up table and pointer manipulations;
4. C#: Dictionary and method chaining;
5. JavaScript: Dictionary and custom `groupBy` + `chunk`;
6. Ruby: Hashes and `group_by`, `flat_map` + `each_slice`;
7. Swift: Dictionary and `grouping` + `flatMap`;
8. Go: Map and slice operations;
9. Scala: Map and `groupBy`, `flatMap` + `grouped`.
10. Kotlin: Map and `groupBy`, `flatMap` + `chunked`.
11. Rust: Hashmap and `for` loops.
12. PHP: Array(ordered map) and `array_chunk` + `foreach`.
13. TypeScript: `Record` and custom `chunked` + `groupBy`. 
14. Racket: Lists and `group-by` + custom `chunked`.
15. Erlang: Map and `foldl`.
16. Elixir: Map and `group_by` + `flat_map` + `chunk_every`.
17. Dart: Map and `for`-loops.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
## C++ - JavaScript
```C++ []
class Solution {
private:
  std::vector<std::vector<int>> chunk_by(std::vector<int> v, int n) {
    size_t size = (v.size() - 1) / n + 1;
    std::vector<int> vec[size];
    for (size_t k = 0; k < size; ++k) {
      auto start_itr = std::next(v.cbegin(), k * n);
      auto end_itr = std::next(v.cbegin(), k * n + n);
      vec[k].resize(n);
      if (k * n + n > v.size()) {
        end_itr = v.cend();
        vec[k].resize(v.size() - k * n);
      }
      std::copy(start_itr, end_itr, vec[k].begin());
    }
    std::vector<std::vector<int>> res;
    for (size_t i = 0; i < size; i++) {
      res.push_back(vec[i]);
    }
    return res;
  }
public:
  vector<vector<int>> groupThePeople(vector<int>& groupSizes) {
    std::vector<int> v(groupSizes.size()); 
    std::iota (std::begin(v), std::end(v), 0); 
    //unique functions
    std::vector<int> uniques = groupSizes;
    std::sort(uniques.begin(), uniques.end()); 
    auto last = std::unique(uniques.begin(), uniques.end());
    uniques.erase(last, uniques.end());
    //intialize map
    std::unordered_map<int, vector<vector<int>>> m;
    for (const auto& i: uniques) {
      m[i].push_back({});
    }
    // push numbers into vector
    for (const auto& i: v) {
      m[groupSizes[i]][0].push_back(i);
    }
    // split into chunks
    for (const auto& [key, value] : m){
      m[key] = chunk_by(m[key][0], key);
    }
    // extract results
    std::vector<std::vector<int>> res;
    for (const auto& [key, value]: m) {
      for (const auto& i: m[key]) {
        res.push_back(i);
      }
    }
    return res;
  }
};
```
```Java []
class Solution {
  static private <T> List<List<T>> chopped_with(List<T> list, final int L) {
    var parts = new ArrayList<List<T>>();
    final int N = list.size();
    for (int i = 0; i < N; i += L) {
        parts.add(new ArrayList<T>(list.subList(i, Math.min(N, i + L))));
    }
    return parts;
  }
  public List<List<Integer>> groupThePeople(int[] groupSizes) {
    return IntStream
      .range(0, groupSizes.length)
      .boxed()
      .collect(Collectors.groupingBy(s -> groupSizes[s]))
      .entrySet()
      .stream()
      .flatMap(e -> chopped_with(e.getValue(), e.getKey()).stream())
      .collect(Collectors.toList());
  }
}
```
```python []
class Solution(object):
  def chunk_with(self, lst, n):
    for i in xrange(0, len(lst), n):
        yield lst[i:i + n]
  def groupThePeople(self, groupSizes):
    """
    :type groupSizes: List[int]
    :rtype: List[List[int]]
    """
    r = range(len(groupSizes))
    s = sorted(r, key = lambda i: groupSizes[i])
    dic = groupby(s, lambda i: groupSizes[i])
    # chunk and flatten
    res = []
    for k,v in dic:
      [res.append(i) for i in list(self.chunk_with(list(v), k))]
    return res
```
```python3 []
class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
      dic = dict()
      #cs = [groupSizes.count(i) for i in groupSizes]
      cs = set(groupSizes)
      print(cs)
      for i in cs:
        dic[i]= []
      #for i in groupSizes:
      for i in range(len(groupSizes)):
        dic[groupSizes[i]] += [i]
       
      def divide_chunks(l, n):     
        for i in range(0, len(l), n):
          yield l[i:i + n]
      res = []
      for k in dic:
          n = len(dic[k]) // k
          z = list(divide_chunks(dic[k], k))
          #print(list(z))
          #print("", k, ' ', dic[k])
          [res.append(i) for i in z]

      print(res)
      return res
```
```c []
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 501
int** groupThePeople(int* groupSizes, int groupSizesSize, int* returnSize, int** returnColumnSizes) {
  int lookup_table[N][N] = {0};
  int key[N] = {0};
  // Naive look up table to store occurences in lookup table
  // and groupSizes in key
  for (size_t i = 0; i < groupSizesSize; i++) {
    lookup_table[groupSizes[i]][key[groupSizes[i]]] = i + 1;
    key[groupSizes[i]] += 1;
  }
  // Calculate number of return subarrays
  // and total number of elements in the resutls
  *returnSize = 0;
  int key_len[N] = {0};
  if (groupSizesSize == 1) {
    key_len[0] = 1;
    key[0] = 1;
    *returnSize = 1;
  } else {
    for (size_t i = 1; i <= groupSizesSize; i++) {
      key_len[i] = key[i] / i;
      *returnSize += key_len[i];
    }
  }
  // create number of column sizes to return
  *returnColumnSizes = malloc((*returnSize)* sizeof(*returnColumnSizes));
  int item_len = 0; 
  for (size_t i = 0, k = 0; i <= groupSizesSize; i++) {
    if(key[i] != 0) {
      item_len += key[i];
      for(size_t j = 0; j < key_len[i]; j++, k++) {
        (*returnColumnSizes)[k] = key[i] / key_len[i];
      }
    }
  }
  // Find the elements to return
  int items[N];
  for(size_t i = 0, k = 0; i < N; i++) {
    for (size_t j = 0; j < N; j++) {
      int item = lookup_table[i][j];
      if(item != 0) {
          items[k] = item; 
          k++;
      }
    }
  }
  // Place items into the resulatant array
  int **return_array = malloc((*returnSize)* sizeof(*return_array));
  for (size_t i = 0, k = 0; i < (*returnSize); i++) {
    return_array[i] = malloc((*returnColumnSizes)[i] * sizeof((*return_array)[0]));
    for(size_t j = 0; j < (*returnColumnSizes)[i]; j++) {
      return_array[i][j] = items[k] - 1;
      k++;
     }
  }
  return return_array;
}
```
```csharp []
public class Solution {
  public IList<IList<int>> GroupThePeople(int[] groupSizes) {
    // result
    var res = Enumerable
      .Range(0, groupSizes.Length)
      .GroupBy(i => groupSizes[i])
      .ToDictionary(e => e.Key, e => e.Chunk(e.Key))
      .Values
      .SelectMany(g => g);
    // align to output format
    IList<IList<int>> outputRes = new List<IList<int>>();
    foreach (var i in res) {
      IList<int> row = new List<int>();
      foreach (var j in i){
        row.Add(j);
      }
      outputRes.Add(row);
    }
     return outputRes;     
  }
}
```
```JavaScript []
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const indices = Array.from({length: groupSizes.length}, (v, k) => k)
  const dict = groupBy(indices, e => groupSizes[e]);
  const res = [];
  for (const [key, value] of  Object.entries(dict)) {
    sliceIntoChunks(value, parseInt(key, 10))
      .forEach(e => res.push(e));
  }
  return res; 
};
function groupBy(arr, keysSupplier) {
  return arr.reduce((obj, elt) => {
    let key = keysSupplier(elt)
    if (obj[key] === undefined)
      obj[key] = []
      obj[key].push(elt)
      return obj
  }, {})
}
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
```
```ruby []
# @param {Integer[]} group_sizes
# @return {Integer[][]}
def group_the_people(group_sizes)
  (0...group_sizes.length())
    .group_by {|i| group_sizes[i] }
    .flat_map{ |key, value| value.each_slice(key).to_a}
end
```
## Swift - Erlang
```swift []
class Solution {
  func groupThePeople(_ groupSizes: [Int]) -> [[Int]] {
    return Dictionary(grouping: 0..<groupSizes.count, by: { groupSizes[$0] })
      .flatMap { $0.value.chunked(into: $0.key) }
  }
}
extension Array {
  func chunked(into size: Int) -> [[Element]] {
    return stride(from: 0, to: count, by: size).map {
      Array(self[$0 ..< Swift.min($0 + size, count)])
    }
  }
}
```
```Go []
func groupThePeople(groupSizes []int) [][]int {
  // group by groupSizes
  group_to_index := make(map[int][]int)
  for i, v := range groupSizes {
    group_to_index[v] = append(group_to_index[v], i)
  }
  // find length of resultant slice
  res_len := 0
  for k, v := range group_to_index {
    res_len += len(v) / k;
  }
  // split to chunks and flatten
  res := make([][]int , res_len)
  l := 0
  for k, v := range group_to_index {
    for _, v2 := range chunkSlice(v, k) {
      res[l] = make([]int, k)
      res[l] = v2
      l++
    }
  }
  return res;
}
func chunkSlice(slice []int, chunkSize int) [][]int {
	var chunks [][]int
	for i := 0; i < len(slice); i += chunkSize {
		end := i + chunkSize
		if end > len(slice) {
			end = len(slice)
		}
		chunks = append(chunks, slice[i:end])
	}
	return chunks
}
```
```scala []
object Solution {
  def groupThePeople(groupSizes: Array[Int]): List[List[Int]] = {
    (0 until groupSizes.length)
      .toList
      .groupBy(x => groupSizes(x))
      .flatMap {case (key, value) => value.grouped(key)}
      .toList        
    }
}
```
```kotlin []
class Solution {
  fun groupThePeople(groupSizes: IntArray): List<List<Int>> {
    return (0 until groupSizes.size)
      .groupBy { groupSizes[it] }
      .flatMap { it.value.chunked(it.key) }
  }
}
```
```rust []
use std::collections::HashMap;
impl Solution {
  pub fn group_the_people(group_sizes: Vec<i32>) -> Vec<Vec<i32>> {
    // Fill hashmap
    let mut hm = HashMap::new();
    for i in 0..group_sizes.len() {
      if !hm.contains_key(&group_sizes[i]) {
        hm.insert(group_sizes[i], vec![]);
      }
      let mut v = hm[&group_sizes[i]].clone();
      v.push(i);
      hm.insert(group_sizes[i], v);
    }
    // Split in chunks
    let mut chunked = vec![];
    for (size, indices) in &hm {
      let k = *size as usize;
      for i in indices.chunks(k).collect::<Vec<_>>() {
        chunked.push(i);
      }
    }
    // Align with requested output
    let mut res = vec![];
    for i in chunked {
      let mut interm = vec![];
      for j in i {
        interm.push(*j as i32);
      }
      res.push(interm);
    }
    return res;
  }
}
```
```php []
class Solution {
  /**
  * @param Integer[] $groupSizes
  * @return Integer[][]
  */
  function groupThePeople($groupSizes) {
    $indices = range(0, count($groupSizes) - 1);
    $hm = array();
    foreach ($indices as $e) {
      if (!array_key_exists($groupSizes[$e], $hm)) {
        $hm[$groupSizes[$e]] = array();
      }
      array_push($hm[$groupSizes[$e]], $e);
    }
    $res = array();
    foreach ($hm as $key => $value) {
      foreach (array_chunk($value, $key, true) as $e) {
        array_push($res, $e);
      }
    }
    return ($res);    
  }
}
```
```typescript []
function groupThePeople(groupSizes: number[]): number[][] {
  const indices: number[] = Array.from({length: groupSizes.length}, (v, k) => k)
  const dict: Record<number, number[]> = groupBy(indices, e => groupSizes[e]);
  const res:number[][] = [];
  for (const [key, value] of  Object.entries(dict)) {
    sliceIntoChunks(value, parseInt(key, 10))
      .forEach(e => res.push(e));
  }
  return res; 
};

function groupBy<
  RetType extends PropertyKey,
  T, // no longer need any requirements on T since the grouper can do w/e it wants
  Func extends (arg: T) => RetType
>(arr: T[], mapper: Func): Record<RetType, T[]> {
  return arr.reduce((accumulator, val) => {
    const groupedKey = mapper(val);
    if (!accumulator[groupedKey]) {
      accumulator[groupedKey] = [];
    }
    accumulator[groupedKey].push(val);
    return accumulator;
  }, {} as Record<RetType, T[]>);
}
const sliceIntoChunks = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );
```
```racket []
(define/contract (group-the-people groupSizes)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  (let* ([indices (sequence->list (in-range (length groupSizes)))]
         [values (group-by (lambda (i) (list-ref groupSizes i)) indices)]
         [keys (remove-duplicates groupSizes)])
    (append* (map (lambda (v k) (chunked v  k)) values keys))))
(define (chunked lst n)
   (if (not (empty? lst))
       (cons (take lst n) (chunked (drop lst n) n))
       '() ))
```
```Erlang []
-spec group_the_people(GroupSizes :: [integer()]) -> [[integer()]].
group_the_people(GroupSizes) ->
  Enums = enumerate(GroupSizes),
  Uniques =  sets:to_list(sets:from_list(GroupSizes)),
  Initialize = fun(X, AccIn) -> maps:put(X, [], AccIn) end,
  EmptyMap = lists:foldl(Initialize, #{}, Uniques),
  Tuples = maps:to_list(lists:foldl(fun insert/2, EmptyMap, Enums)),
  lists:foldl(fun ({_, V}, Acc) -> 
    Acc ++ V end, [], Tuples).
enumerate(List) ->
  {List1, _ } = lists:mapfoldl(fun(T, Acc) -> 
    {{Acc, T}, Acc+1} end, 0, List),
  List1.
insert({I, E}, AccIn) -> 
  Item = maps:get(E, AccIn),
  case Item of 
    [] -> maps:put(E, [[I]], AccIn);
    _  -> case length(lists:last(Item)) =:= E of
            true -> maps:put(E, Item ++ [[I]], AccIn); 
            false -> maps:put(E, lists:droplast(Item) ++ 
              [lists:last(Item) ++ [I]], AccIn) 
          end
   end.
```
## Elixir - Dart
```Elixir []
defmodule Solution do
  @spec group_the_people(group_sizes :: [integer]) :: [[integer]]
  def group_the_people(group_sizes) do
    0..length(group_sizes) - 1 |> 
      Enum.to_list |>
      Enum.group_by(fn(x) -> Enum.at(group_sizes, x) end) |>
      Enum.flat_map(fn{k, v} -> Enum.chunk_every(v, k) end)
  end
end
```
```Dart []
class Solution {
  List<List<int>> chunked(List<int> lst, int size) {
    List<List<int>>  chunks = [];
    var len = lst.length;
    for(var i = 0; i < len; i += size) {    
      var end = (i + size<len)?i + size:len;
      chunks.add(lst.sublist(i,end));
    }
    return chunks;
  }
  List<List<int>> groupThePeople(List<int> groupSizes) {
    var values = new List<int>
      .generate(groupSizes.length, (i) => i);
    var map = <int, List<int>>{};
    for (var element in values) {
      (map[groupSizes[element]] ??= []).add(element);
    }
    List<List<int>>  res = [];
    for (var e in map.entries) {
      for (var i in chunked(e.value, e.key)) {
        res.add(i);
      }
    }
    return res;
  }
}
```






