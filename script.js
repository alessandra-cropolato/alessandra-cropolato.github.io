javascript
document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        // Cria uma nova linha na tabela
        const table = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Adiciona a célula com o item
        const newCell = newRow.insertCell(0);
        newCell.textContent = itemValue;

        // Limpa o campo de entrada
        itemInput.value = '';
    } else {
        alert('Por favor, insira um item.');
    }
});
