# open-weather-image

# Installation

```sh
$ npm install open-weather-image
```
---

open-weather-image is a image creation (base64 png) to show current weather data of a provided area

Forecast data is loaded from [OpenWeather API](https://openweathermap.org)

---

# Quick Example

First you will need to register and account on OpenWeather to obtain an API key

[How to Start OpenWeather](https://openweathermap.org/appid)

```ts
import { createWeatherImageToday } from 'open-weather-image'

const image = await createWeatherImageToday({ key: 'YOUR API KEY', cityName: 'Adelaide' })
```

---

# License
open-weather-image
(The MIT License)

Copyright &copy; 2022 Kira Kitsune <dev@learnboost.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.