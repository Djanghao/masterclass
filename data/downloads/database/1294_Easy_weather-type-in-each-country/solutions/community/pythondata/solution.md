# Pandas || Using .groupby(), .agg(), and .apply() || No need for numpy.where()

**Author:** Kasuyai
**Votes:** 1
**Link:** [https://leetcode.com/problems/weather-type-in-each-country/solutions/5334635/](https://leetcode.com/problems/weather-type-in-each-country/solutions/5334635/)

---

# Approach
The main difficulty of this question is identifying a new column with weather types. You can change the existing column using numpy.where as other solutions have done. Or you can use the `.apply()` method and create a function that will do the assigning.

# Code
```
import pandas as pd

def weather_type(countries: pd.DataFrame, weather: pd.DataFrame) -> pd.DataFrame:
    def weatherType(temp):
        if temp <= 15:
            return "Cold"
        elif temp >= 25:
            return "Hot"
        else:
            return "Warm"

    df = (
        weather[(weather["day"].dt.month == 11)]
        .groupby("country_id", as_index=False)
        .agg({"weather_state": "mean"})
        .merge(countries)
        .rename(columns={"weather_state": "weather_type"})
    )

    df["weather_type"] = df["weather_type"].apply(weatherType)

    return df[["country_name", "weather_type"]]
```