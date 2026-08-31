# Elixir with "with"

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4793550/](https://leetcode.com/problems/validate-ip-address/solutions/4793550/)

---

Using `with` to avoid unnecessary operations.
# Code
```Elixir
defmodule Solution do
  @spec valid_ip_address(query_ip :: String.t) :: String.t
  def valid_ip_address(query_ip) do
    check_ipv4(query_ip)
  end

  defp check_ipv4(ip) do
    with list when length(list) == 4 <- String.split(ip, "."),
    true <- Enum.all?(list, fn s ->
      cond do
        s == "0" -> true
        String.first(s) == "0" -> false
        true -> case Integer.parse(s) do
          {x, ""} -> x in 1..255
          _ -> false
        end
      end
    end) do
      "IPv4"
    else
      [_] -> check_ipv6(ip)
      _ -> "Neither"
    end
  end

  defp check_ipv6(ip) do
    with list when length(list) == 8 <- String.split(ip, ":"),
    true <- Enum.all?(list, fn s ->
      if String.length(s) in 1..4 do
        String.to_charlist(s)
        |> Enum.all?(fn ch ->
          ch in ?0..?9 or ch in ?A..?F or ch in ?a..?f
        end)
      else
        false
      end
    end) do
      "IPv6"
    else
      _ -> "Neither"
    end
  end
end
```