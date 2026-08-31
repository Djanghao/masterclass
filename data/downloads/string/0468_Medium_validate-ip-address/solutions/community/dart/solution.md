# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4572403/](https://leetcode.com/problems/validate-ip-address/solutions/4572403/)

---

modified version of [kvikhlyaev's](https://leetcode.com/problems/validate-ip-address/solutions/4011547/simple-and-beautiful-solution-on-dart/) solution

# Code
```
class Solution {
  String validIPAddress(String queryIP) {
    return IPChecker(queryIP).getIPTypeName();
  }
}

enum Type {NEITHER, IPV4, IPV6}

extension TypeX on Type {
  String get name {
    switch (this) {
      case Type.NEITHER:
        return "Neither";
      case Type.IPV4:
        return "IPv4";
      case Type.IPV6:
        return "IPv6";
      default:
        throw ArgumentError("Invalid Type value: $this");
    }
  }
}

class IPChecker {
    late String queryIP;
    late Type type;

    IPChecker(String query) {
        queryIP = query;
        type = checkIPType();
    }

    Type checkIPType() {
        if (queryIP.contains('.')) {
            type = Type.IPV4;
        } else if (queryIP.contains(':')) {
            type = Type.IPV6;
        } else {
            type = Type.NEITHER;
        }

        return type;
    }

    bool checkIPv4() {
        final s = queryIP.split('.');

        if (!checkIPLength()) {
            return false;
        }

        for (final fragment in s) {
            if (!checkFormat(fragment) || !checkFragmentRange(fragment)) {
                return false;
            }
        }

        return true;
    }

    bool checkIPv6() {
        final s = queryIP.split(':');

        if (!checkIPLength()) {
            return false;
        }

        for (final fragment in s) {
            if (!checkFormat(fragment) || !checkFragmentLength(fragment)) {
                return false;
            }
        }

        return true;
    }

    bool checkFormat(String fragment) {
        if (type == Type.IPV4) {
            return RegExp(r'\\d').hasMatch(fragment) && !fragment.startsWith('0') || fragment.length == 1;
        } else {
            return RegExp(r'^[a-fA-F\\d]+
```).hasMatch(fragment);
        }
    }

    bool checkIPLength() {
        if (type == Type.IPV4) {
            return queryIP.split('.').length == 4;
        } else {
            return queryIP.split(':').length >= 1 && queryIP.split(':').length <= 8;
        }
    }

    bool checkFragmentLength(String fragment) {    
        return fragment.length >= 1 && fragment.length <= 4;   
    }

    bool checkFragmentRange(String fragment) {
        final numParsed = int.tryParse(fragment) ?? -1;
        return numParsed >= 0 && numParsed <= 255;
    }

    String getIPTypeName() {
        if (!checkIPv4() && !checkIPv6()) {
            return Type.NEITHER.name;
        }

        return type.name;
    }
}
```