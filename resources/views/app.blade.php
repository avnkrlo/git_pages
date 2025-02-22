<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/src/styles.css" rel="stylesheet">

    <title>Laravel + Vue + Inertia</title>
    @vite('resources/js/app.js')
    @routes
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
