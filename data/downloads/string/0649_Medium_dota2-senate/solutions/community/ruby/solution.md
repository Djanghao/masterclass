# Ruby

**Author:** alecn2002
**Votes:** 3
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3483887/](https://leetcode.com/problems/dota2-senate/solutions/3483887/)

---

# Code
```ruby
def predict_party_victory(senate)
    qr, qd = senate.chars.each_with_index.partition {|q| q.first == 'R' }.collect {|a| a.collect(&:last) }
    until qr.empty? || qd.empty? do
        ri, di = [qr, qd].collect(&:shift)
        if ri < di then 
            qr << ri + senate.size
        else
            qd << di + senate.size
        end
    end
    qr.size > qd.size ? 'Radiant' : 'Dire'
end

```

## Or, shorter but slower

```ruby

class Array
    def shap(sh) = first << last + sh
end

def predict_party_victory(senate)
    qrqd = senate.chars.each_with_index.partition {|q| q.first == 'R' }.collect {|a| a.collect(&:last) }
    (ridi = qrqd.collect(&:shift); qrqd.zip(ridi)[ridi.first < ridi.last ? 0 : 1].shap(senate.size)) until qrqd.any?(&:empty?)
    qrqd.first.size > qrqd.last.size ? 'Radiant' : 'Dire'
end
```