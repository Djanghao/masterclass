# Ruby || Recursion with memoization

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2709668/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2709668/)

---

```ruby
class Solver
    attr_reader :jd, :mem
    
    def initialize(jd, d)
        @jd, @d, @mem = jd, d, Array.new(jd.size + 1) {|i| Array.new(d + 1) }
    end
    
    def solve(idx = 0, d = @d)
        mem[idx][d] ||= (d == 1) ? 
                        jd[idx..-1].max : 
                        jd[idx+1..-d].each_with_index.inject([jd[idx], jd[idx] + solve(idx+1, d-1)]) {|(vmax, res), (v, jdx)|
                            vmax = [vmax, v].max
                            [vmax, [res, vmax + solve(idx+jdx+2, d-1)].min]
                        }.last
    end
end

def min_difficulty(job_difficulty, d)
    return -1 if d > job_difficulty.size
    Solver.new(job_difficulty, d).solve
end
```