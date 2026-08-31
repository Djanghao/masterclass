# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5081753/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5081753/)

---

# Game Plan

Brute-force consider all possible values for hours `h` and minutes `m`.

# Code

*Kotlin*
```
class Solution {
    fun findLatestTime(s: String): String {
        var best = ""
        var ok = { t: String -> (0..t.lastIndex).all{ s[it] == t[it] || s[it] == '?' } && t.slice(0..1).toInt() <= 11 && t.slice(3..4).toInt() <= 59 }
        for (h in 0..11) {
            for (m in 0..59) {
                var hh = "$h".padStart(2, '0')
                var mm = "$m".padStart(2, '0')
                if (ok("$hh:$mm"))
                    best = "$hh:$mm"
            }
        }
        return best
    }
}
```

*Javascript*
```
let findLatestTime = (s, best = '', ok = t => _.range(0, t.length).every(i => (s[i] == t[i] || s[i] == '?') && Number(t.slice(0, 2)) < 12 && Number(t.slice(3, 5) < 60))) => {
    for (let h = 0; h < 12; ++h) {
        for (let m = 0; m < 60; ++m) {
            let hh = `${h}`.padStart(2, '0'),
                mm = `${m}`.padStart(2, '0');
            if (ok(`${hh}:${mm}`))
                best = `${hh}:${mm}`;
        }
    }
    return best;
};
```

*Python3*
```
class Solution:
    def findLatestTime(self, s: str, best = '') -> str:
        ok = lambda t: all((s[i] == t[i] or s[i] == '?') and int(t[0:2]) < 12 and int(t[3:5]) < 60 for i in range(len(t)))
        for h in range(0, 12):
            for m in range(0, 60):
                hh = str(h).zfill(2)
                mm = str(m).zfill(2)
                if ok(f'{hh}:{mm}'):
                    best = f'{hh}:{mm}'
        return best
```

*Rust*
```
// TODO: implement me
```

*C++*
```
class Solution {
public:
    string findLatestTime(string s, string best = {}, string cand = {}) {
        auto ok = [&](auto& t) {
            return all_of(t.begin(), t.end(), [i = -1, &s, &t](auto _) mutable {
                ++i; return (s[i] == t[i] || s[i] == '?') && stoi(t.substr(0, 2)) < 12 && stoi(t.substr(3, 5)) < 60;
            });
        };
        auto pad = [](auto x) -> string {
            ostringstream os; os << setfill('0') << setw(2) << x;
            return os.str();
        };
        for (auto h{ 0 }; h < 12; ++h) {
            for (auto m{ 0 }; m < 60; ++m) {
                auto hh = pad(h),
                     mm = pad(m);
                stringstream ss; ss << hh << ":" << mm; ss >> cand;
                if (ok(cand))
                    best = cand;
            }
        }       
        return best;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF

*Kotlin*
```
// just do brute-force

// class Solution {
//     fun findLatestTime(s: String): String {
//         var t = mutableListOf<Char>()
//         if (s[0] == '?') {
//             if (s[1] == '0' || s[1] == '1' || s[1] == '?') t.add('1') else t.add('0')
//         } else {
//             t.add(s[0])
//         }
//         if (s[1] == '?') {
//             if (t[0] == '1') t.add('1') else t.add('9')
//         } else {
//             t.add(s[1])
//         }
//         t.add(':')
//         if (s[3] == '?') t.add('5') else t.add(s[3])
//         if (s[4] == '?') t.add('9') else t.add(s[4])
//         return t.joinToString("")
//     }
// }

// class Solution {
//     fun findLatestTime(s: String): String {
//         var best = ""
//         var ok = { t: String -> (0..t.lastIndex).all{ s[it] == t[it] || s[it] == '?' } && t.slice(0..1).toInt() <= 11 && t.slice(3..4).toInt() <= 59 }
//         for (a in 0..1)
//             for (b in 0..9)
//                 for (c in 0..5)
//                     for (d in 0..9)
//                         if (ok("$a$b:$c$d"))
//                             best = "$a$b:$c$d"
//         return best
//     }
// }

class Solution {
    fun findLatestTime(s: String): String {
        var best = ""
        var ok = { t: String -> (0..t.lastIndex).all{ s[it] == t[it] || s[it] == '?' } && t.slice(0..1).toInt() <= 11 && t.slice(3..4).toInt() <= 59 }
        for (h in 0..11) {
            for (m in 0..59) {
                var hh = "$h".padStart(2, '0')
                var mm = "$m".padStart(2, '0')
                if (ok("$hh:$mm"))
                    best = "$hh:$mm"
            }
        }
        return best
    }
}
```