# planreis

Een command line tool om reizen te plannen over het Nederlandse spoornet.

# Installatie
`npm i -g planreis`
`update-multiplanner $NS_API_TOKEN`

# Gebruik
Na installatie kan deze tool gebruikt worden als `planreis route.txt`
Waar `route.txt` een tekstbestand is waar een reis in staat beschreven in het multiplanner formaat.

# Voorbeeld

`route.txt`:

```
tomorrow 06:00
arnhem centraal
utrecht centraal
zwolle
assen
09:20
groningen
leeuwarden
almere centrum
amsterdam centraal
rotterdam
60
arnemuiden
'shertogenbosch
blerick
```

Deze route zal beginnen de dag nadat het command wordt gedraaid om 06:00 'sochtends. Deze reis wacht tot 09:20 in Assen. Ook heeft deze een stop van minimaal 60 minuten in Rotterdam.
