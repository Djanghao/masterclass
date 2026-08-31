# Simple C++ (std::shuffle and fisher-yates) with tips, faster than 99.50%

**Author:** shlom
**Votes:** 13
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/867754/](https://leetcode.com/problems/shuffle-an-array/solutions/867754/)

---

- Avoid using `rand()` because it only generates pseudo-random integral value between 0 and `RAND_MAX` which value is implementation dependent.
- You should also avoid using `random_shuffle()` which is using `rand()` (problematic for inputs larger than `RAND_MAX`).

Luckly, there are some alternatives, namely, C++ `<random>` header and `std::shuffle`. The following example is using `<random>` to generate pseudo-random numbers along with the [Fisher-Yates Shuffle algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)  to produce random permutations of the array:

```
class Solution {
public:
    Solution(const vector<int>& nums) : nums(nums), arr(nums), seed(random_device{}()) {}

    vector<int> reset() {
		arr = nums;
		return arr;
	}

    vector<int> shuffle() {
        for (int i = size(arr) - 1; i > 0; --i) {
            auto idx = uniform_int_distribution<int>(0, i)(seed);
            swap(arr[i], arr[idx]);
        }
        return arr;
    }
private:
    vector<int> arr, nums;
    default_random_engine seed;
};
```
The code in `vector<int> shuffle()` could be replaced with `std::shuffle` like so:
```
vector<int> shuffle() {
	std::shuffle(begin(arr), end(arr), seed);
	return arr;
}
```
In-fact, the underlying implementation of `std::shuffle` is [possibly using the same algorithm](https://en.cppreference.com/w/cpp/algorithm/random_shuffle) anyway:
```
template<class RandomIt, class URBG>
void shuffle(RandomIt first, RandomIt last, URBG&& g)
{
    typedef typename std::iterator_traits<RandomIt>::difference_type diff_t;
    typedef std::uniform_int_distribution<diff_t> distr_t;
    typedef typename distr_t::param_type param_t;
 
    distr_t D;
    diff_t n = last - first;
    for (diff_t i = n-1; i > 0; --i) {
        using std::swap;
        swap(first[i], first[D(g, param_t(0, i))]);
    }
}
```
In an interview setting, you will be asked the implement the algorithm youself (instead of relying on `std::shuffle`) but it's worth mentioning anyway.