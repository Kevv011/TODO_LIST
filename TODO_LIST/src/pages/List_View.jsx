import { useEffect, useState } from 'react';
import { getActivities } from '../firebase/activitiesService';

export const List_View = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const activitiesData = await getActivities();
      setActivities(activitiesData);
    };
    fetchActivities();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Lista de Actividades</h2>
      <div className="row">
        {activities.map((activity) => (
          <div className="col-md-4" key={activity.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{activity.nombreActividad}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{activity.hora}</h6>
                <p className="card-text">{activity.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
