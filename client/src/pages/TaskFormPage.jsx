import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(params.id); 
      if (params.id) {
        await updateTask(params.id, {
          ...data,
          _id: params.id, 
          date: dayjs.utc(data.date).format(),
        });
      } else {
        await createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, [params.id, setValue, getTask]);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          name="title"
          placeholder="Título"
          {...register("title", { required: true })}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Por favor ingresa un título.</p>
        )}

        <Label htmlFor="description">Descripción</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
        ></Textarea>
        {errors.description && (
          <p className="text-red-500 text-xs italic">Por favor ingresa una descripción.</p>
        )}

        <Label htmlFor="date">Fecha</Label>
        <Input
          type="date"
          name="date"
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="text-red-500 text-xs italic">Por favor ingresa una fecha.</p>
        )}

        <Button>Guardar</Button>
      </form>
    </Card>
  );
}