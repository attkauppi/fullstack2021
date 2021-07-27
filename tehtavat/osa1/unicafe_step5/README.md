# 1.10 unicafe step 5


Jatketaan sovelluksen refaktorointia. Eriytä seuraavat kaksi komponenttia

Button vastaa yksittäistä palautteenantonappia
StatisticLine huolehtii tilastorivien, esim. keskiarvon näyttämisestä
Tarkennuksena: komponentti StatisticLine näyttää aina yhden tilastorivin, joten sovellus käyttää montaa komponenttia kaikkien tilastorivien renderöintiin

```
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```

Sovelluksen tila säilytetään edelleen juurikomponentissa App.