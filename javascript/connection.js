$.ajax({
    url: 'http://192.168.10.200:8086/login',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(
        {
            "email": "elias.pereira@suldopara.com.br",
            "senha": "smgeo123",
            "dominio": "FRIG. TESTE 01"
        }),

    success: function (data) {
        const token = data['X-Token'];
        const nome = data['nome'];
        const id = data['id'];
        const car = data['car'];
        const tipo = data['status'];
        const uf = data['uf'];
        const municipio = data['municipio'];

        $.ajax({
            url: "http://192.168.10.200:8086/propriedade/49978",
            contentType: 'application/json',
            headers: {
                'X-token': token,
     
            },

        });
    },
});