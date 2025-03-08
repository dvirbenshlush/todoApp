// import { Request, Response, NextFunction } from 'express';
// import { getModel as getTaskslModel } from '../../models/tasks/factory';
// import { getModel as getSymbolValueModel } from '../../models/tasks/factory';
// import { DTO } from '../../models/tasks/dto';
    

// export async function addTask(req: Request, res: Response, next: NextFunction) {
//     try {
//         const userSymbol = {
//             userId: req.body.userId ?? 1,
//             status: req.body.status as string,
//             createdAt: new Date()
//         }

//         const newUserSymbol = await getTaskslModel().addTask(userSymbol)
//         res.redirect('/users/dashboard')
//     } catch (err) {
//         next(err)
//     }
// }

// export async function dashboard(req: Request, res: Response, next: NextFunction) {
//     try {
//         const userSymbols = await getTaskslModel().getAllTasks(req.body.userId ?? 1); 

//         const symbolValues = await Promise.all(userSymbols.map(({status}) => {
//             return getSymbolValueModel().getAllTasks(status)
//         }))


//         res.render('users/dashboard', {
//             userSymbols,
//             symbolValues
//         }) 
//     } catch (err) {
//         next(err)
//     }
// }