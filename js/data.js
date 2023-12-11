const projects = [
    {
        id: 'project1',
        name: 'Proyecto 1',
        start_date: '2023-01-01',
        end_date: '2023-12-31',
    },
    // Puedes agregar más proyectos según sea necesario
];

const activities = [
    {
        id: 'activity1',
        project_id: 'project1',
        name: 'Actividad 1',
        start_date: '2023-01-05',
        end_date: '2023-01-15',
    },
    {
        id: 'activity2',
        project_id: 'project1',
        name: 'Actividad 2',
        start_date: '2023-01-20',
        end_date: '2023-02-10',
    },
    // Puedes agregar más actividades y proyectos según sea necesario
];

// Otros datos necesarios para tu aplicación

export { projects, activities };
