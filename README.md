# design-token
Design Token Generator

## What are design Tokens and why?

## Configuration

### Colors

backgrounds.yml / border.yml / text.yml
1. edit your colors

```
example:

lighten_5: &lighten_5
value: "#f1f8e9"
name: "LIGHT_GREEN_LT_5"
```

2. add token in props and reference defined color:

```
example: 

color-background-default: 
    <<: *lighten_5
    description: "Description of the Toke "color-background-default" with color lighten_5"
```


### Create files

```
npm start
```

## Author
Aminata Sidibe 

## License

