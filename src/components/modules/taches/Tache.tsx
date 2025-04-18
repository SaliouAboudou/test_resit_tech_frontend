import React from 'react'

const Tache = () => {
  return (
    <div>
      <div className=' bg-red-100 px-2 py-3 w-full flex justify-end'>AKJ</div>

      <div className=' flex justify-end px-4 py-2'>
        <button className=' bg-zinc-700 text-white px-4 py-2 rounded-md hover:bg-zinc-600'>Nouveau</button>
      </div>

      <div className="overflow-x-auto">
           
              {/* Zone tableau  */}
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border border-gray-300">#</th>
                      <th className="px-4 py-2 border border-gray-300">Titre</th>
                      <th className="px-4 py-2 border border-gray-300">Description</th>
                      <th className="px-4 py-2 border border-gray-300">Date Echeance</th>
                      <th className="px-4 py-2 border border-gray-300">Date Creation</th>
                      <th className="px-4 py-2 border border-gray-300">Enregistré par</th>
                      <th className="px-4 py-2 border border-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                                    
                        
                     
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  )
}

export default Tache
