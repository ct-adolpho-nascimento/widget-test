// import abc from 'acn-weather-widget'

// abc()

// Importe a biblioteca
import WeatherWidget from 'acn-weather-widget';

// Chave secreta fornecida pelo proprietário da biblioteca
const apiKey = 'SUA_CHAVE_SECRETA';

// Crie uma instância do widget e especifique a cidade
const widget = new WeatherWidget('Montes Claros', apiKey);

// Renderize o widget em um elemento HTML
widget.render(document.getElementById('weather-widget'));
