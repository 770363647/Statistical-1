package com.zmst.Controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.zmst.Domain.SubTax;
import com.zmst.Service.TaxCalculateService;
import com.zmst.Tools.HttpReturn;
 
import javax.annotation.*;

/**
 * 
 * @author Zhou
 *税收计算控制类
 */
@Controller
@RequestMapping("/taxCaculate")
public class TaxCaculateController {

	@Resource
	private TaxCalculateService taxService;
	/**
	 *小类调取及计算全部 
	 * 
	 */
	@RequestMapping(value="/subTaxGet",method=RequestMethod.POST)  
   
	public void allTaxManager(HttpServletRequest request,HttpServletResponse response){
		 HttpSession session = request.getSession();		 
			String year = "2017";//(String) session.getAttribute("year");
			String city =null;
			city="张家界";//(String) session.getAttribute("city");
			String county=null; 
			//county= (String)session.getAttribute("county");
			String place = null;
			if(county!=null){
				 place=county;
			}else{
				place=city;
			}
		
	    List<SubTax> allcentral =	taxService.getSubTaxt(year,place);
	    
		 try {
				request.setCharacterEncoding("utf-8");
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  //这里不设置编码会有乱码
		      response.setContentType("text/html;charset=utf-8");
			  String json = JSON.toJSONString(allcentral);
			  HttpReturn.reponseBody(response, json);;
	}
}
