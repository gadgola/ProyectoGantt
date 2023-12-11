document.addEventListener('DOMContentLoaded', function () {
    const ganttChart = document.getElementById('gantt-chart');

    // Inicializar la tabla Gantt
    const gantt = new GanttChart(ganttChart, ganttData);

    // Actualizar la tabla Gantt al cargar la página
    gantt.draw();

    // Manejar cambios en el proyecto seleccionado
    const projectSelect = document.getElementById('project-select');
    projectSelect.addEventListener('change', function () {
        const selectedProject = projectSelect.value;
        gantt.changeProject(selectedProject);
    });

    // Manejar cambios en la vista seleccionada
    const viewSelect = document.getElementById('view-select');
    viewSelect.addEventListener('change', function () {
        const selectedView = viewSelect.value;
        gantt.changeView(selectedView);
    });

    // Manejar actualizaciones en el backlog
    const backlogBtn = document.getElementById('backlog-btn');
    backlogBtn.addEventListener('click', function () {
        gantt.updateBacklog();
    });
});
