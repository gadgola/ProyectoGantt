class GanttChart {
    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.currentProject = null;
        this.currentView = 'month';

        this.gantt = new Gantt(container, data, {
            header_height: 50,
            column_width: 30,
            step: 24,
            view_modes: ['quarter', 'month', 'week', 'day'],
            bar_height: 20,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 18,
            view_mode: this.currentView,
            date_format: 'YYYY-MM-DD',
            project: this.currentProject,
        });
    }

    changeProject(project) {
        this.currentProject = project;
        this.gantt.changeProject(project);
    }

    changeView(view) {
        this.currentView = view;
        this.gantt.changeViewMode(view);
    }

    updateBacklog() {
        // Lógica para actualizar el backlog
        // Se puede implementar según sea necesario
        console.log('Backlog actualizado');
    }

    draw() {
        this.gantt.draw();
    }
}
